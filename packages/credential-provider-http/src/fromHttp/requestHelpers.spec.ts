import { CredentialsProviderError } from "@smithy/property-provider";
import { HttpResponse } from "@smithy/protocol-http";
import { parseRfc3339DateTime } from "@smithy/smithy-client";
import { Readable } from "stream";

import { createGetRequest, getCredentials } from "./requestHelpers";

describe(getCredentials.name, () => {
  const data = {
    AccessKeyId: "ACCESS_KEY_ID",
    SecretAccessKey: "SECRET_ACCESS_KEY",
    Token: "TOKEN",
    AccountId: "ACCOUNT_ID",
    Expiration: new Date().toISOString(),
  };
  it("parses the response body for status 200", async () => {
    const response = new HttpResponse({
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: Readable.from(JSON.stringify(data)),
    });
    const credentials = await getCredentials(response);
    expect(credentials).toEqual({
      accessKeyId: data.AccessKeyId,
      secretAccessKey: data.SecretAccessKey,
      sessionToken: data.Token,
      expiration: parseRfc3339DateTime(data.Expiration),
    });
  });

  it("throws CredentialsProviderError for status 4xx and tries to parse the error body", async () => {
    const response = new HttpResponse({
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: Readable.from(
        JSON.stringify({
          Code: "ERROR_CODE",
          Message: "ERROR_MESSAGE",
          ExtraneousField: "EXTRANEOUS_FIELD",
        })
      ),
    });
    const credentials = await getCredentials(response).catch((_) => _);
    expect(credentials).toEqual(
      Object.assign(new CredentialsProviderError("Server responded with status: 400"), {
        Code: "ERROR_CODE",
        Message: "ERROR_MESSAGE",
      })
    );
  });

  it("throws CredentialsProviderError for status not equal to 200", async () => {
    const response = new HttpResponse({
      statusCode: 500,
      headers: {
        "Content-Type": "json",
      },
      body: Readable.from(JSON.stringify({})),
    });
    const credentials = await getCredentials(response).catch((_) => _);
    expect(credentials).toBeInstanceOf(CredentialsProviderError);
  });
});

describe(createGetRequest.name, () => {
  it("creates an HttpRequest from a URL", () => {
    const request = createGetRequest(new URL("https://a1.aws:333/path?query=v"));

    expect(request.protocol).toEqual("https:");
    expect(request.hostname).toEqual("a1.aws");
    expect(request.port).toEqual(333);
    expect(request.path).toEqual("/path");
    expect(request.query).toEqual({
      query: "v",
    });
  });
});

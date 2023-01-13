import { HttpResponse } from "@aws-sdk/protocol-http";

import { getDateHeader } from "./getDateHeader";

describe(getDateHeader.name, () => {
  it("should return undefined in the response is not an HttpResponse", () => {
    expect(getDateHeader({})).toEqual(undefined);
  });

  it("should return undefined if there are no date headers", () => {
    const response = new HttpResponse({
      statusCode: 200,
    });
    expect(getDateHeader(response)).toEqual(undefined);
  });

  it.each([
    {
      key: "date",
      value: "date",
    },
    {
      key: "Date",
      value: "date",
    },
  ])("should get date from headers", ({ key, value }) => {
    const response = new HttpResponse({
      statusCode: 200,
    });
    response.headers[key] = value;
    expect(getDateHeader(response)).toEqual(value);
  });
});

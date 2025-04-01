import { AttributedAwsCredentialIdentity } from "@aws-sdk/types";
import { describe, expect, test as it } from "vitest";

import { setCredentialFeature } from "./setCredentialFeature";

describe(setCredentialFeature.name, () => {
  it("should create the data path if it does't exist", () => {
    const credentials = {
      accessKeyId: "",
      secretAccessKey: "",
    } as AttributedAwsCredentialIdentity;
    expect(setCredentialFeature(credentials, "CREDENTIALS_CODE", "e")).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      $source: {
        CREDENTIALS_CODE: "e",
      },
    });
  });

  it("should track a set of features", () => {
    const credentials = {
      accessKeyId: "",
      secretAccessKey: "",
    } as AttributedAwsCredentialIdentity;

    setCredentialFeature(credentials, "CREDENTIALS_CODE", "e");
    setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
    // it ignores duplicates.
    setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");

    expect(setCredentialFeature(credentials, "CREDENTIALS_CODE", "e")).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      $source: {
        CREDENTIALS_CODE: "e",
        CREDENTIALS_ENV_VARS: "g",
      },
    });
  });
});

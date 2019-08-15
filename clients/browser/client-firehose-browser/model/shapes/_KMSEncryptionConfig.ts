import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KMSEncryptionConfig: _Structure_ = {
  type: "structure",
  required: ["AWSKMSKeyARN"],
  members: {
    AWSKMSKeyARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

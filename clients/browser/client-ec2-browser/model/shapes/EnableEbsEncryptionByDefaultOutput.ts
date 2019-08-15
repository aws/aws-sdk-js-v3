import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableEbsEncryptionByDefaultOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EbsEncryptionByDefault: {
      shape: {
        type: "boolean"
      },
      locationName: "ebsEncryptionByDefault"
    }
  }
};

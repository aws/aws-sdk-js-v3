import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Certificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateArn: {
      shape: {
        type: "string"
      }
    },
    IsDefault: {
      shape: {
        type: "boolean"
      }
    }
  }
};

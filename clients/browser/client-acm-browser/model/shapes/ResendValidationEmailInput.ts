import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResendValidationEmailInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn", "Domain", "ValidationDomain"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ValidationDomain: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

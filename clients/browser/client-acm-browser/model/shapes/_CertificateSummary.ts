import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateValidity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    notBefore: {
      shape: {
        type: "timestamp"
      }
    },
    notAfter: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

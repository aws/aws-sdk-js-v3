import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificate: {
      shape: {
        type: "string"
      }
    },
    CertificateChain: {
      shape: {
        type: "string"
      }
    }
  }
};

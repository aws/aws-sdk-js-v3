import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLunaClientInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientArn: {
      shape: {
        type: "string"
      }
    },
    CertificateFingerprint: {
      shape: {
        type: "string"
      }
    }
  }
};

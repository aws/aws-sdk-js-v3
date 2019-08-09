import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLunaClientOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientArn: {
      shape: {
        type: "string"
      }
    },
    Certificate: {
      shape: {
        type: "string",
        min: 600
      }
    },
    CertificateFingerprint: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTimestamp: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    }
  }
};

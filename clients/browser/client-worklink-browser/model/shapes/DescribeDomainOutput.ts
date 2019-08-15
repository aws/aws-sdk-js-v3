import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DomainStatus: {
      shape: {
        type: "string"
      }
    },
    AcmCertificateArn: {
      shape: {
        type: "string"
      }
    }
  }
};

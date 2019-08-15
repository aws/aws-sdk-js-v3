import { _ActiveTrustedSigners } from "./_ActiveTrustedSigners";
import { _StreamingDistributionConfig } from "./_StreamingDistributionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamingDistribution: _Structure_ = {
  type: "structure",
  required: [
    "Id",
    "ARN",
    "Status",
    "DomainName",
    "ActiveTrustedSigners",
    "StreamingDistributionConfig"
  ],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    ARN: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DomainName: {
      shape: {
        type: "string"
      }
    },
    ActiveTrustedSigners: {
      shape: _ActiveTrustedSigners
    },
    StreamingDistributionConfig: {
      shape: _StreamingDistributionConfig
    }
  }
};

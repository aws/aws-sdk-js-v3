import { _ActiveTrustedSigners } from "./_ActiveTrustedSigners";
import { _DistributionConfig } from "./_DistributionConfig";
import { _AliasICPRecordals } from "./_AliasICPRecordals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Distribution: _Structure_ = {
  type: "structure",
  required: [
    "Id",
    "ARN",
    "Status",
    "LastModifiedTime",
    "InProgressInvalidationBatches",
    "DomainName",
    "ActiveTrustedSigners",
    "DistributionConfig"
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
    InProgressInvalidationBatches: {
      shape: {
        type: "integer"
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
    DistributionConfig: {
      shape: _DistributionConfig
    },
    AliasICPRecordals: {
      shape: _AliasICPRecordals
    }
  }
};

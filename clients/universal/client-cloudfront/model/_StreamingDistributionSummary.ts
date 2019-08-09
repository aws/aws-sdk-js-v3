import { _S3Origin } from "./_S3Origin";
import { _Aliases } from "./_Aliases";
import { _TrustedSigners } from "./_TrustedSigners";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamingDistributionSummary: _Structure_ = {
  type: "structure",
  required: [
    "Id",
    "ARN",
    "Status",
    "LastModifiedTime",
    "DomainName",
    "S3Origin",
    "Aliases",
    "TrustedSigners",
    "Comment",
    "PriceClass",
    "Enabled"
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
    S3Origin: {
      shape: _S3Origin
    },
    Aliases: {
      shape: _Aliases
    },
    TrustedSigners: {
      shape: _TrustedSigners
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    PriceClass: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};

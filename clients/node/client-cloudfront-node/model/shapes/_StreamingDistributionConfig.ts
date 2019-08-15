import { _S3Origin } from "./_S3Origin";
import { _Aliases } from "./_Aliases";
import { _StreamingLoggingConfig } from "./_StreamingLoggingConfig";
import { _TrustedSigners } from "./_TrustedSigners";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamingDistributionConfig: _Structure_ = {
  type: "structure",
  required: [
    "CallerReference",
    "S3Origin",
    "Comment",
    "TrustedSigners",
    "Enabled"
  ],
  members: {
    CallerReference: {
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
    Comment: {
      shape: {
        type: "string"
      }
    },
    Logging: {
      shape: _StreamingLoggingConfig
    },
    TrustedSigners: {
      shape: _TrustedSigners
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

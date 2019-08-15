import { _Aliases } from "./_Aliases";
import { _Origins } from "./_Origins";
import { _OriginGroups } from "./_OriginGroups";
import { _DefaultCacheBehavior } from "./_DefaultCacheBehavior";
import { _CacheBehaviors } from "./_CacheBehaviors";
import { _CustomErrorResponses } from "./_CustomErrorResponses";
import { _LoggingConfig } from "./_LoggingConfig";
import { _ViewerCertificate } from "./_ViewerCertificate";
import { _Restrictions } from "./_Restrictions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DistributionConfig: _Structure_ = {
  type: "structure",
  required: [
    "CallerReference",
    "Origins",
    "DefaultCacheBehavior",
    "Comment",
    "Enabled"
  ],
  members: {
    CallerReference: {
      shape: {
        type: "string"
      }
    },
    Aliases: {
      shape: _Aliases
    },
    DefaultRootObject: {
      shape: {
        type: "string"
      }
    },
    Origins: {
      shape: _Origins
    },
    OriginGroups: {
      shape: _OriginGroups
    },
    DefaultCacheBehavior: {
      shape: _DefaultCacheBehavior
    },
    CacheBehaviors: {
      shape: _CacheBehaviors
    },
    CustomErrorResponses: {
      shape: _CustomErrorResponses
    },
    Comment: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Logging: {
      shape: _LoggingConfig
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
    },
    ViewerCertificate: {
      shape: _ViewerCertificate
    },
    Restrictions: {
      shape: _Restrictions
    },
    WebACLId: {
      shape: {
        type: "string"
      }
    },
    HttpVersion: {
      shape: {
        type: "string"
      }
    },
    IsIPV6Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};

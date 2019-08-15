import { _Aliases } from "./_Aliases";
import { _Origins } from "./_Origins";
import { _OriginGroups } from "./_OriginGroups";
import { _DefaultCacheBehavior } from "./_DefaultCacheBehavior";
import { _CacheBehaviors } from "./_CacheBehaviors";
import { _CustomErrorResponses } from "./_CustomErrorResponses";
import { _ViewerCertificate } from "./_ViewerCertificate";
import { _Restrictions } from "./_Restrictions";
import { _AliasICPRecordals } from "./_AliasICPRecordals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DistributionSummary: _Structure_ = {
  type: "structure",
  required: [
    "Id",
    "ARN",
    "Status",
    "LastModifiedTime",
    "DomainName",
    "Aliases",
    "Origins",
    "DefaultCacheBehavior",
    "CacheBehaviors",
    "CustomErrorResponses",
    "Comment",
    "PriceClass",
    "Enabled",
    "ViewerCertificate",
    "Restrictions",
    "WebACLId",
    "HttpVersion",
    "IsIPV6Enabled"
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
    Aliases: {
      shape: _Aliases
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
    },
    AliasICPRecordals: {
      shape: _AliasICPRecordals
    }
  }
};

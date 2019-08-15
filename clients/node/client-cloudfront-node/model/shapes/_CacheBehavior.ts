import { _ForwardedValues } from "./_ForwardedValues";
import { _TrustedSigners } from "./_TrustedSigners";
import { _AllowedMethods } from "./_AllowedMethods";
import { _LambdaFunctionAssociations } from "./_LambdaFunctionAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheBehavior: _Structure_ = {
  type: "structure",
  required: [
    "PathPattern",
    "TargetOriginId",
    "ForwardedValues",
    "TrustedSigners",
    "ViewerProtocolPolicy",
    "MinTTL"
  ],
  members: {
    PathPattern: {
      shape: {
        type: "string"
      }
    },
    TargetOriginId: {
      shape: {
        type: "string"
      }
    },
    ForwardedValues: {
      shape: _ForwardedValues
    },
    TrustedSigners: {
      shape: _TrustedSigners
    },
    ViewerProtocolPolicy: {
      shape: {
        type: "string"
      }
    },
    MinTTL: {
      shape: {
        type: "integer"
      }
    },
    AllowedMethods: {
      shape: _AllowedMethods
    },
    SmoothStreaming: {
      shape: {
        type: "boolean"
      }
    },
    DefaultTTL: {
      shape: {
        type: "integer"
      }
    },
    MaxTTL: {
      shape: {
        type: "integer"
      }
    },
    Compress: {
      shape: {
        type: "boolean"
      }
    },
    LambdaFunctionAssociations: {
      shape: _LambdaFunctionAssociations
    },
    FieldLevelEncryptionId: {
      shape: {
        type: "string"
      }
    }
  }
};

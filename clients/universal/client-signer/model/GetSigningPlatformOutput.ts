import { _SigningConfiguration } from "./_SigningConfiguration";
import { _SigningImageFormat } from "./_SigningImageFormat";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSigningPlatformOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    platformId: {
      shape: {
        type: "string"
      }
    },
    displayName: {
      shape: {
        type: "string"
      }
    },
    partner: {
      shape: {
        type: "string"
      }
    },
    target: {
      shape: {
        type: "string"
      }
    },
    category: {
      shape: {
        type: "string"
      }
    },
    signingConfiguration: {
      shape: _SigningConfiguration
    },
    signingImageFormat: {
      shape: _SigningImageFormat
    },
    maxSizeInMB: {
      shape: {
        type: "integer"
      }
    }
  }
};

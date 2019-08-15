import { _Source } from "./_Source";
import { _SigningMaterial } from "./_SigningMaterial";
import { _SigningPlatformOverrides } from "./_SigningPlatformOverrides";
import { _SigningParameters } from "./_SigningParameters";
import { _SignedObject } from "./_SignedObject";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSigningJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    source: {
      shape: _Source
    },
    signingMaterial: {
      shape: _SigningMaterial
    },
    platformId: {
      shape: {
        type: "string"
      }
    },
    profileName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    overrides: {
      shape: _SigningPlatformOverrides
    },
    signingParameters: {
      shape: _SigningParameters
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    completedAt: {
      shape: {
        type: "timestamp"
      }
    },
    requestedBy: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    signedObject: {
      shape: _SignedObject
    }
  }
};

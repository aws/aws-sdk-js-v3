import { _Source } from "./_Source";
import { _SignedObject } from "./_SignedObject";
import { _SigningMaterial } from "./_SigningMaterial";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningJob: _Structure_ = {
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
    signedObject: {
      shape: _SignedObject
    },
    signingMaterial: {
      shape: _SigningMaterial
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};

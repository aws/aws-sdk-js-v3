import { _SigningMaterial } from "./_SigningMaterial";
import { _SigningParameters } from "./_SigningParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningProfile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    profileName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    signingMaterial: {
      shape: _SigningMaterial
    },
    platformId: {
      shape: {
        type: "string"
      }
    },
    signingParameters: {
      shape: _SigningParameters
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};

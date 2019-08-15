import { _SigningMaterial } from "./_SigningMaterial";
import { _SigningPlatformOverrides } from "./_SigningPlatformOverrides";
import { _SigningParameters } from "./_SigningParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSigningProfileInput: _Structure_ = {
  type: "structure",
  required: ["profileName", "signingMaterial", "platformId"],
  members: {
    profileName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "profileName"
    },
    signingMaterial: {
      shape: _SigningMaterial
    },
    platformId: {
      shape: {
        type: "string"
      }
    },
    overrides: {
      shape: _SigningPlatformOverrides
    },
    signingParameters: {
      shape: _SigningParameters
    }
  }
};

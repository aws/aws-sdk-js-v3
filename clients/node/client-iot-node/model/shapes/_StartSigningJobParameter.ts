import { _SigningProfileParameter } from "./_SigningProfileParameter";
import { _Destination } from "./_Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartSigningJobParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    signingProfileParameter: {
      shape: _SigningProfileParameter
    },
    signingProfileName: {
      shape: {
        type: "string"
      }
    },
    destination: {
      shape: _Destination
    }
  }
};

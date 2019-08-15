import { _SigningProfiles } from "./_SigningProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    profiles: {
      shape: _SigningProfiles
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

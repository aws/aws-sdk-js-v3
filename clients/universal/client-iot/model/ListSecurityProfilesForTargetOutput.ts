import { _SecurityProfileTargetMappings } from "./_SecurityProfileTargetMappings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecurityProfilesForTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileTargetMappings: {
      shape: _SecurityProfileTargetMappings
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

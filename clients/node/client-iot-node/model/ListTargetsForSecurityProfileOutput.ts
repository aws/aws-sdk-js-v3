import { _SecurityProfileTargets } from "./_SecurityProfileTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTargetsForSecurityProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileTargets: {
      shape: _SecurityProfileTargets
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

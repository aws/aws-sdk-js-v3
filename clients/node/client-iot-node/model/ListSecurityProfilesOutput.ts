import { _SecurityProfileIdentifiers } from "./_SecurityProfileIdentifiers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecurityProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileIdentifiers: {
      shape: _SecurityProfileIdentifiers
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _InstanceProfiles } from "./_InstanceProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceProfiles: {
      shape: _InstanceProfiles
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};

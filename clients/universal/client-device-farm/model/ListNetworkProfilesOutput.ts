import { _NetworkProfiles } from "./_NetworkProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNetworkProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    networkProfiles: {
      shape: _NetworkProfiles
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};

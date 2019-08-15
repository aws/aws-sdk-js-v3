import { _NetworkProfile } from "./_NetworkProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    networkProfile: {
      shape: _NetworkProfile
    }
  }
};

import { _NetworkProfile } from "./_NetworkProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNetworkProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkProfile: {
      shape: _NetworkProfile
    }
  }
};

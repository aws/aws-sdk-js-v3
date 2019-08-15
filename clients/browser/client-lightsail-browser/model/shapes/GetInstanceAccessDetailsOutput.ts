import { _InstanceAccessDetails } from "./_InstanceAccessDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceAccessDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    accessDetails: {
      shape: _InstanceAccessDetails
    }
  }
};

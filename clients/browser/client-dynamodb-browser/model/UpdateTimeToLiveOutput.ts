import { _TimeToLiveSpecification } from "./_TimeToLiveSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTimeToLiveOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimeToLiveSpecification: {
      shape: _TimeToLiveSpecification
    }
  }
};

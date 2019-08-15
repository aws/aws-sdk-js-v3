import { _Observation } from "./_Observation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObservationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Observation: {
      shape: _Observation
    }
  }
};

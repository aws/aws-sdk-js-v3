import { _TargetHealthDescriptions } from "./_TargetHealthDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTargetHealthOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetHealthDescriptions: {
      shape: _TargetHealthDescriptions
    }
  }
};

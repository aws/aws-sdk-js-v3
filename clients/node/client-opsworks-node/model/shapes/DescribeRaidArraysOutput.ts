import { _RaidArrays } from "./_RaidArrays";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRaidArraysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RaidArrays: {
      shape: _RaidArrays
    }
  }
};

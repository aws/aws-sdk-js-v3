import { _EventArnsList } from "./_EventArnsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEntityAggregatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventArns: {
      shape: _EventArnsList
    }
  }
};

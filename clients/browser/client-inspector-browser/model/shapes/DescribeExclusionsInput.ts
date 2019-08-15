import { _BatchDescribeExclusionsArnList } from "./_BatchDescribeExclusionsArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExclusionsInput: _Structure_ = {
  type: "structure",
  required: ["exclusionArns"],
  members: {
    exclusionArns: {
      shape: _BatchDescribeExclusionsArnList
    },
    locale: {
      shape: {
        type: "string"
      }
    }
  }
};

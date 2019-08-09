import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFindingsInput: _Structure_ = {
  type: "structure",
  required: ["findingArns"],
  members: {
    findingArns: {
      shape: _BatchDescribeArnList
    },
    locale: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRulesPackagesInput: _Structure_ = {
  type: "structure",
  required: ["rulesPackageArns"],
  members: {
    rulesPackageArns: {
      shape: _BatchDescribeArnList
    },
    locale: {
      shape: {
        type: "string"
      }
    }
  }
};

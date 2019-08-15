import { _ActivityTypeInfo } from "./_ActivityTypeInfo";
import { _ActivityTypeConfiguration } from "./_ActivityTypeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivityTypeOutput: _Structure_ = {
  type: "structure",
  required: ["typeInfo", "configuration"],
  members: {
    typeInfo: {
      shape: _ActivityTypeInfo
    },
    configuration: {
      shape: _ActivityTypeConfiguration
    }
  }
};

import { _WorkflowTypeInfo } from "./_WorkflowTypeInfo";
import { _WorkflowTypeConfiguration } from "./_WorkflowTypeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkflowTypeOutput: _Structure_ = {
  type: "structure",
  required: ["typeInfo", "configuration"],
  members: {
    typeInfo: {
      shape: _WorkflowTypeInfo
    },
    configuration: {
      shape: _WorkflowTypeConfiguration
    }
  }
};

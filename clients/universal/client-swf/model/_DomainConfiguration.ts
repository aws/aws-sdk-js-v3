import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainConfiguration: _Structure_ = {
  type: "structure",
  required: ["workflowExecutionRetentionPeriodInDays"],
  members: {
    workflowExecutionRetentionPeriodInDays: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

import { _TaskDefinitionFieldList } from "./_TaskDefinitionFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["taskDefinition"],
  members: {
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    include: {
      shape: _TaskDefinitionFieldList
    }
  }
};

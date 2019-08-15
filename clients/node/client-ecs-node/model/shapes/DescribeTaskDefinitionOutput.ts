import { _TaskDefinition } from "./_TaskDefinition";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskDefinitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskDefinition: {
      shape: _TaskDefinition
    },
    tags: {
      shape: _Tags
    }
  }
};

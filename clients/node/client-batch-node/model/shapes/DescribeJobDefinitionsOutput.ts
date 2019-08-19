import { _JobDefinitionList } from "./_JobDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobDefinitionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobDefinitions: {
      shape: _JobDefinitionList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

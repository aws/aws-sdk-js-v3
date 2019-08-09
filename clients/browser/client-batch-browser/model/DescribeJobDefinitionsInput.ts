import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobDefinitionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobDefinitions: {
      shape: _StringList
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    jobDefinitionName: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

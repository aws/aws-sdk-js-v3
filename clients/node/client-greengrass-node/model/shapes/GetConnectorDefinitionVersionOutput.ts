import { _ConnectorDefinitionVersion } from "./_ConnectorDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectorDefinitionVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "string"
      }
    },
    Definition: {
      shape: _ConnectorDefinitionVersion
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};

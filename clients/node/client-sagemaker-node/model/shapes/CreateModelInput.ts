import { _ContainerDefinition } from "./_ContainerDefinition";
import { _ContainerDefinitionList } from "./_ContainerDefinitionList";
import { _TagList } from "./_TagList";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelInput: _Structure_ = {
  type: "structure",
  required: ["ModelName", "ExecutionRoleArn"],
  members: {
    ModelName: {
      shape: {
        type: "string"
      }
    },
    PrimaryContainer: {
      shape: _ContainerDefinition
    },
    Containers: {
      shape: _ContainerDefinitionList
    },
    ExecutionRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _TagList
    },
    VpcConfig: {
      shape: _VpcConfig
    },
    EnableNetworkIsolation: {
      shape: {
        type: "boolean"
      }
    }
  }
};

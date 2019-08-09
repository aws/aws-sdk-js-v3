import { _ContainerDefinition } from "./_ContainerDefinition";
import { _ContainerDefinitionList } from "./_ContainerDefinitionList";
import { _VpcConfig } from "./_VpcConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeModelOutput: _Structure_ = {
  type: "structure",
  required: ["ModelName", "ExecutionRoleArn", "CreationTime", "ModelArn"],
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
    VpcConfig: {
      shape: _VpcConfig
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    ModelArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    EnableNetworkIsolation: {
      shape: {
        type: "boolean"
      }
    }
  }
};

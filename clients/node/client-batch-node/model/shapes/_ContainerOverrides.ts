import { _StringList } from "./_StringList";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _ResourceRequirements } from "./_ResourceRequirements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vcpus: {
      shape: {
        type: "integer"
      }
    },
    memory: {
      shape: {
        type: "integer"
      }
    },
    command: {
      shape: _StringList
    },
    instanceType: {
      shape: {
        type: "string"
      }
    },
    environment: {
      shape: _EnvironmentVariables
    },
    resourceRequirements: {
      shape: _ResourceRequirements
    }
  }
};

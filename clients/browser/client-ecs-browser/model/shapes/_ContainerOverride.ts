import { _StringList } from "./_StringList";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _ResourceRequirements } from "./_ResourceRequirements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerOverride: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    command: {
      shape: _StringList
    },
    environment: {
      shape: _EnvironmentVariables
    },
    cpu: {
      shape: {
        type: "integer"
      }
    },
    memory: {
      shape: {
        type: "integer"
      }
    },
    memoryReservation: {
      shape: {
        type: "integer"
      }
    },
    resourceRequirements: {
      shape: _ResourceRequirements
    }
  }
};

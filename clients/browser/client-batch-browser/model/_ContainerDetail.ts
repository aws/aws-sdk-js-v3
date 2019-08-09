import { _StringList } from "./_StringList";
import { _Volumes } from "./_Volumes";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _MountPoints } from "./_MountPoints";
import { _Ulimits } from "./_Ulimits";
import { _NetworkInterfaceList } from "./_NetworkInterfaceList";
import { _ResourceRequirements } from "./_ResourceRequirements";
import { _LinuxParameters } from "./_LinuxParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    image: {
      shape: {
        type: "string"
      }
    },
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
    jobRoleArn: {
      shape: {
        type: "string"
      }
    },
    volumes: {
      shape: _Volumes
    },
    environment: {
      shape: _EnvironmentVariables
    },
    mountPoints: {
      shape: _MountPoints
    },
    readonlyRootFilesystem: {
      shape: {
        type: "boolean"
      }
    },
    ulimits: {
      shape: _Ulimits
    },
    privileged: {
      shape: {
        type: "boolean"
      }
    },
    user: {
      shape: {
        type: "string"
      }
    },
    exitCode: {
      shape: {
        type: "integer"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    },
    containerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    taskArn: {
      shape: {
        type: "string"
      }
    },
    logStreamName: {
      shape: {
        type: "string"
      }
    },
    instanceType: {
      shape: {
        type: "string"
      }
    },
    networkInterfaces: {
      shape: _NetworkInterfaceList
    },
    resourceRequirements: {
      shape: _ResourceRequirements
    },
    linuxParameters: {
      shape: _LinuxParameters
    }
  }
};

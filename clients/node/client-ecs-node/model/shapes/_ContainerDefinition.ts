import { _RepositoryCredentials } from "./_RepositoryCredentials";
import { _StringList } from "./_StringList";
import { _PortMappingList } from "./_PortMappingList";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _MountPointList } from "./_MountPointList";
import { _VolumeFromList } from "./_VolumeFromList";
import { _LinuxParameters } from "./_LinuxParameters";
import { _SecretList } from "./_SecretList";
import { _ContainerDependencies } from "./_ContainerDependencies";
import { _HostEntryList } from "./_HostEntryList";
import { _DockerLabelsMap } from "./_DockerLabelsMap";
import { _UlimitList } from "./_UlimitList";
import { _LogConfiguration } from "./_LogConfiguration";
import { _HealthCheck } from "./_HealthCheck";
import { _SystemControls } from "./_SystemControls";
import { _ResourceRequirements } from "./_ResourceRequirements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    image: {
      shape: {
        type: "string"
      }
    },
    repositoryCredentials: {
      shape: _RepositoryCredentials
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
    links: {
      shape: _StringList
    },
    portMappings: {
      shape: _PortMappingList
    },
    essential: {
      shape: {
        type: "boolean"
      }
    },
    entryPoint: {
      shape: _StringList
    },
    command: {
      shape: _StringList
    },
    environment: {
      shape: _EnvironmentVariables
    },
    mountPoints: {
      shape: _MountPointList
    },
    volumesFrom: {
      shape: _VolumeFromList
    },
    linuxParameters: {
      shape: _LinuxParameters
    },
    secrets: {
      shape: _SecretList
    },
    dependsOn: {
      shape: _ContainerDependencies
    },
    startTimeout: {
      shape: {
        type: "integer"
      }
    },
    stopTimeout: {
      shape: {
        type: "integer"
      }
    },
    hostname: {
      shape: {
        type: "string"
      }
    },
    user: {
      shape: {
        type: "string"
      }
    },
    workingDirectory: {
      shape: {
        type: "string"
      }
    },
    disableNetworking: {
      shape: {
        type: "boolean"
      }
    },
    privileged: {
      shape: {
        type: "boolean"
      }
    },
    readonlyRootFilesystem: {
      shape: {
        type: "boolean"
      }
    },
    dnsServers: {
      shape: _StringList
    },
    dnsSearchDomains: {
      shape: _StringList
    },
    extraHosts: {
      shape: _HostEntryList
    },
    dockerSecurityOptions: {
      shape: _StringList
    },
    interactive: {
      shape: {
        type: "boolean"
      }
    },
    pseudoTerminal: {
      shape: {
        type: "boolean"
      }
    },
    dockerLabels: {
      shape: _DockerLabelsMap
    },
    ulimits: {
      shape: _UlimitList
    },
    logConfiguration: {
      shape: _LogConfiguration
    },
    healthCheck: {
      shape: _HealthCheck
    },
    systemControls: {
      shape: _SystemControls
    },
    resourceRequirements: {
      shape: _ResourceRequirements
    }
  }
};

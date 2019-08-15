import { _StringList } from "./_StringList";
import { _MapValue } from "./_MapValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDevEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _StringList
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    YarnEndpointAddress: {
      shape: {
        type: "string"
      }
    },
    ZeppelinRemoteSparkInterpreterPort: {
      shape: {
        type: "integer"
      }
    },
    NumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    WorkerType: {
      shape: {
        type: "string"
      }
    },
    NumberOfWorkers: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    ExtraPythonLibsS3Path: {
      shape: {
        type: "string"
      }
    },
    ExtraJarsS3Path: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Arguments: {
      shape: _MapValue
    }
  }
};

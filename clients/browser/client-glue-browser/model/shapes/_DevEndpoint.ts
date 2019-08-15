import { _StringList } from "./_StringList";
import { _PublicKeysList } from "./_PublicKeysList";
import { _MapValue } from "./_MapValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DevEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
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
    YarnEndpointAddress: {
      shape: {
        type: "string"
      }
    },
    PrivateAddress: {
      shape: {
        type: "string"
      }
    },
    ZeppelinRemoteSparkInterpreterPort: {
      shape: {
        type: "integer"
      }
    },
    PublicAddress: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
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
    NumberOfNodes: {
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
    LastUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    PublicKey: {
      shape: {
        type: "string"
      }
    },
    PublicKeys: {
      shape: _PublicKeysList
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arguments: {
      shape: _MapValue
    }
  }
};

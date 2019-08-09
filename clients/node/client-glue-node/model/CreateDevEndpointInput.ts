import { _StringList } from "./_StringList";
import { _PublicKeysList } from "./_PublicKeysList";
import { _TagsMap } from "./_TagsMap";
import { _MapValue } from "./_MapValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDevEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName", "RoleArn"],
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
    PublicKey: {
      shape: {
        type: "string"
      }
    },
    PublicKeys: {
      shape: _PublicKeysList
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
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagsMap
    },
    Arguments: {
      shape: _MapValue
    }
  }
};

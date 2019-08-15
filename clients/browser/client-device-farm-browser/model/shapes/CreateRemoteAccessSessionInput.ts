import { _CreateRemoteAccessSessionConfiguration } from "./_CreateRemoteAccessSessionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRemoteAccessSessionInput: _Structure_ = {
  type: "structure",
  required: ["projectArn", "deviceArn"],
  members: {
    projectArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    deviceArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    instanceArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    sshPublicKey: {
      shape: {
        type: "string"
      }
    },
    remoteDebugEnabled: {
      shape: {
        type: "boolean"
      }
    },
    remoteRecordEnabled: {
      shape: {
        type: "boolean"
      }
    },
    remoteRecordAppArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    clientId: {
      shape: {
        type: "string"
      }
    },
    configuration: {
      shape: _CreateRemoteAccessSessionConfiguration
    },
    interactionMode: {
      shape: {
        type: "string"
      }
    },
    skipAppResign: {
      shape: {
        type: "boolean"
      }
    }
  }
};

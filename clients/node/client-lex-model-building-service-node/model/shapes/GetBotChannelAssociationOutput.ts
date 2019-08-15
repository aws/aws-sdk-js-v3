import { _ChannelConfigurationMap } from "./_ChannelConfigurationMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotChannelAssociationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    botAlias: {
      shape: {
        type: "string",
        min: 1
      }
    },
    botName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    botConfiguration: {
      shape: _ChannelConfigurationMap
    },
    status: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    }
  }
};

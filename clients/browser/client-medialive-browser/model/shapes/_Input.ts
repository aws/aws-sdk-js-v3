import { ___listOf__string } from "./___listOf__string";
import { ___listOfInputDestination } from "./___listOfInputDestination";
import { ___listOfMediaConnectFlow } from "./___listOfMediaConnectFlow";
import { ___listOfInputSource } from "./___listOfInputSource";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Input: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    AttachedChannels: {
      shape: ___listOf__string,
      locationName: "attachedChannels"
    },
    Destinations: {
      shape: ___listOfInputDestination,
      locationName: "destinations"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    InputClass: {
      shape: {
        type: "string"
      },
      locationName: "inputClass"
    },
    InputSourceType: {
      shape: {
        type: "string"
      },
      locationName: "inputSourceType"
    },
    MediaConnectFlows: {
      shape: ___listOfMediaConnectFlow,
      locationName: "mediaConnectFlows"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    },
    SecurityGroups: {
      shape: ___listOf__string,
      locationName: "securityGroups"
    },
    Sources: {
      shape: ___listOfInputSource,
      locationName: "sources"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};

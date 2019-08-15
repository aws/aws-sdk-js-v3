import { ___listOfOutputDestination } from "./___listOfOutputDestination";
import { ___listOfChannelEgressEndpoint } from "./___listOfChannelEgressEndpoint";
import { ___listOfInputAttachment } from "./___listOfInputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    ChannelClass: {
      shape: {
        type: "string"
      },
      locationName: "channelClass"
    },
    Destinations: {
      shape: ___listOfOutputDestination,
      locationName: "destinations"
    },
    EgressEndpoints: {
      shape: ___listOfChannelEgressEndpoint,
      locationName: "egressEndpoints"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    InputAttachments: {
      shape: ___listOfInputAttachment,
      locationName: "inputAttachments"
    },
    InputSpecification: {
      shape: _InputSpecification,
      locationName: "inputSpecification"
    },
    LogLevel: {
      shape: {
        type: "string"
      },
      locationName: "logLevel"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    PipelinesRunningCount: {
      shape: {
        type: "integer"
      },
      locationName: "pipelinesRunningCount"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
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
    }
  }
};

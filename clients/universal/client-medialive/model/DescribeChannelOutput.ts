import { ___listOfOutputDestination } from "./___listOfOutputDestination";
import { ___listOfChannelEgressEndpoint } from "./___listOfChannelEgressEndpoint";
import { _EncoderSettings } from "./_EncoderSettings";
import { ___listOfInputAttachment } from "./___listOfInputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { ___listOfPipelineDetail } from "./___listOfPipelineDetail";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChannelOutput: _Structure_ = {
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
    EncoderSettings: {
      shape: _EncoderSettings,
      locationName: "encoderSettings"
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
    PipelineDetails: {
      shape: ___listOfPipelineDetail,
      locationName: "pipelineDetails"
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

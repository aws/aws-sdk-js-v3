import { ___listOfOutputDestination } from "./___listOfOutputDestination";
import { _EncoderSettings } from "./_EncoderSettings";
import { ___listOfInputAttachment } from "./___listOfInputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateChannelInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    EncoderSettings: {
      shape: _EncoderSettings,
      locationName: "encoderSettings"
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
    RequestId: {
      shape: {
        type: "string"
      },
      locationName: "requestId"
    },
    Reserved: {
      shape: {
        type: "string"
      },
      locationName: "reserved"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};

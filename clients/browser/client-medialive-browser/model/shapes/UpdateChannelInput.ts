import { ___listOfOutputDestination } from "./___listOfOutputDestination";
import { _EncoderSettings } from "./_EncoderSettings";
import { ___listOfInputAttachment } from "./___listOfInputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChannelInput: _Structure_ = {
  type: "structure",
  required: ["ChannelId"],
  members: {
    ChannelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "channelId"
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
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    }
  }
};

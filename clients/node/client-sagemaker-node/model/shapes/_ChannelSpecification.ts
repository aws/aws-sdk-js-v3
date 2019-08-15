import { _ContentTypes } from "./_ContentTypes";
import { _CompressionTypes } from "./_CompressionTypes";
import { _InputModes } from "./_InputModes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelSpecification: _Structure_ = {
  type: "structure",
  required: ["Name", "SupportedContentTypes", "SupportedInputModes"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    IsRequired: {
      shape: {
        type: "boolean"
      }
    },
    SupportedContentTypes: {
      shape: _ContentTypes
    },
    SupportedCompressionTypes: {
      shape: _CompressionTypes
    },
    SupportedInputModes: {
      shape: _InputModes
    }
  }
};

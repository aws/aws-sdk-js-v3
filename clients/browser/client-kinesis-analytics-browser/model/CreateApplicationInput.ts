import { _Inputs } from "./_Inputs";
import { _Outputs } from "./_Outputs";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationDescription: {
      shape: {
        type: "string"
      }
    },
    Inputs: {
      shape: _Inputs
    },
    Outputs: {
      shape: _Outputs
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    },
    ApplicationCode: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};

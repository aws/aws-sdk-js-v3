import { _StreamProcessorInput } from "./_StreamProcessorInput";
import { _StreamProcessorOutput } from "./_StreamProcessorOutput";
import { _StreamProcessorSettings } from "./_StreamProcessorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamProcessorInput: _Structure_ = {
  type: "structure",
  required: ["Input", "Output", "Name", "Settings", "RoleArn"],
  members: {
    Input: {
      shape: _StreamProcessorInput
    },
    Output: {
      shape: _StreamProcessorOutput
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Settings: {
      shape: _StreamProcessorSettings
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};

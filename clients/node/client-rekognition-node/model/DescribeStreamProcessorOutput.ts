import { _StreamProcessorInput } from "./_StreamProcessorInput";
import { _StreamProcessorOutput } from "./_StreamProcessorOutput";
import { _StreamProcessorSettings } from "./_StreamProcessorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamProcessorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamProcessorArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Input: {
      shape: _StreamProcessorInput
    },
    Output: {
      shape: _StreamProcessorOutput
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    Settings: {
      shape: _StreamProcessorSettings
    }
  }
};

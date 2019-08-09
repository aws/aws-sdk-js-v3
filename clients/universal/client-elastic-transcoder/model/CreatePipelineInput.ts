import { _Notifications } from "./_Notifications";
import { _PipelineOutputConfig } from "./_PipelineOutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["Name", "InputBucket", "Role"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputBucket: {
      shape: {
        type: "string"
      }
    },
    OutputBucket: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    AwsKmsKeyArn: {
      shape: {
        type: "string"
      }
    },
    Notifications: {
      shape: _Notifications
    },
    ContentConfig: {
      shape: _PipelineOutputConfig
    },
    ThumbnailConfig: {
      shape: _PipelineOutputConfig
    }
  }
};

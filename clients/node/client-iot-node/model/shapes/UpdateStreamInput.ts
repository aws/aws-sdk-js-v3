import { _StreamFiles } from "./_StreamFiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStreamInput: _Structure_ = {
  type: "structure",
  required: ["streamId"],
  members: {
    streamId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "streamId"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    files: {
      shape: _StreamFiles
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};

import { _StreamFiles } from "./_StreamFiles";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamInput: _Structure_ = {
  type: "structure",
  required: ["streamId", "files", "roleArn"],
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
    },
    tags: {
      shape: _TagList
    }
  }
};

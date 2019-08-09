import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateExportTaskInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "from", "to", "destination"],
  members: {
    taskName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    from: {
      shape: {
        type: "integer"
      }
    },
    to: {
      shape: {
        type: "integer"
      }
    },
    destination: {
      shape: {
        type: "string",
        min: 1
      }
    },
    destinationPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};

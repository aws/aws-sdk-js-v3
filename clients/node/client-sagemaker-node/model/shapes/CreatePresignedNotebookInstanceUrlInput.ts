import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePresignedNotebookInstanceUrlInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceName"],
  members: {
    NotebookInstanceName: {
      shape: {
        type: "string"
      }
    },
    SessionExpirationDurationInSeconds: {
      shape: {
        type: "integer",
        min: 1800
      }
    }
  }
};

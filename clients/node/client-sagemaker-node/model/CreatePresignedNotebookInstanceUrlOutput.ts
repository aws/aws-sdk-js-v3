import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePresignedNotebookInstanceUrlOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthorizedUrl: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _RevisionInfoList } from "./_RevisionInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetApplicationRevisionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    },
    revisions: {
      shape: _RevisionInfoList
    }
  }
};

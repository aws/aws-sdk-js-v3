import { _AuditTaskMetadataList } from "./_AuditTaskMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tasks: {
      shape: _AuditTaskMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

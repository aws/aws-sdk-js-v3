import { _idList } from "./_idList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetStatusInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "objectIds", "status"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    objectIds: {
      shape: _idList
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _DataResources } from "./_DataResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReadWriteType: {
      shape: {
        type: "string"
      }
    },
    IncludeManagementEvents: {
      shape: {
        type: "boolean"
      }
    },
    DataResources: {
      shape: _DataResources
    }
  }
};

import { _ResourceTypeList } from "./_ResourceTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordingGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    allSupported: {
      shape: {
        type: "boolean"
      }
    },
    includeGlobalResourceTypes: {
      shape: {
        type: "boolean"
      }
    },
    resourceTypes: {
      shape: _ResourceTypeList
    }
  }
};

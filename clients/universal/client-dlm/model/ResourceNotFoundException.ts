import { _PolicyIdList } from "./_PolicyIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceNotFoundException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Code: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceIds: {
      shape: _PolicyIdList
    }
  },
  exceptionType: "ResourceNotFoundException"
};

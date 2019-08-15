import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    },
    resourceIds: {
      shape: _StringList
    }
  }
};

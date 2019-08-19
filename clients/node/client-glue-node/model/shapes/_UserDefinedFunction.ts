import { _ResourceUriList } from "./_ResourceUriList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserDefinedFunction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClassName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OwnerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OwnerType: {
      shape: {
        type: "string"
      }
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceUris: {
      shape: _ResourceUriList
    }
  }
};

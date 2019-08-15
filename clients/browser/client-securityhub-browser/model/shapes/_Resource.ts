import { _FieldMap } from "./_FieldMap";
import { _ResourceDetails } from "./_ResourceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resource: _Structure_ = {
  type: "structure",
  required: ["Type", "Id"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Partition: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _FieldMap
    },
    Details: {
      shape: _ResourceDetails
    }
  }
};

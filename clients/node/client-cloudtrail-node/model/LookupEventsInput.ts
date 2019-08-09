import { _LookupAttributesList } from "./_LookupAttributesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const LookupEventsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LookupAttributes: {
      shape: _LookupAttributesList
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

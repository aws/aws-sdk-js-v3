import { Structure as _Structure_ } from "@aws-sdk/types";

export const ViewBillingInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Start: {
      shape: {
        type: "timestamp"
      }
    },
    End: {
      shape: {
        type: "timestamp"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};

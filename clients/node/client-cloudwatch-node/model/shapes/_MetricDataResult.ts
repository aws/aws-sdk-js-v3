import { _Timestamps } from "./_Timestamps";
import { _DatapointValues } from "./_DatapointValues";
import { _MetricDataResultMessages } from "./_MetricDataResultMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricDataResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    Timestamps: {
      shape: _Timestamps
    },
    Values: {
      shape: _DatapointValues
    },
    StatusCode: {
      shape: {
        type: "string"
      }
    },
    Messages: {
      shape: _MetricDataResultMessages
    }
  }
};

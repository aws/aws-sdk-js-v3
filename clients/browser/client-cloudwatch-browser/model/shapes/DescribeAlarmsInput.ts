import { _AlarmNames } from "./_AlarmNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlarmsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmNames: {
      shape: _AlarmNames
    },
    AlarmNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StateValue: {
      shape: {
        type: "string"
      }
    },
    ActionPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxRecords: {
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

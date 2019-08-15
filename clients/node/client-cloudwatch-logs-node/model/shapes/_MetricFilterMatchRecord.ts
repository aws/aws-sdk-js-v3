import { _ExtractedValues } from "./_ExtractedValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricFilterMatchRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventNumber: {
      shape: {
        type: "integer"
      }
    },
    eventMessage: {
      shape: {
        type: "string",
        min: 1
      }
    },
    extractedValues: {
      shape: _ExtractedValues
    }
  }
};

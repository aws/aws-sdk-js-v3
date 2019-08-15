import { _DateInterval } from "./_DateInterval";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDimensionValuesInput: _Structure_ = {
  type: "structure",
  required: ["TimePeriod", "Dimension"],
  members: {
    SearchString: {
      shape: {
        type: "string"
      }
    },
    TimePeriod: {
      shape: _DateInterval
    },
    Dimension: {
      shape: {
        type: "string"
      }
    },
    Context: {
      shape: {
        type: "string"
      }
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};

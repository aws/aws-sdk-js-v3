import { _DateInterval } from "./_DateInterval";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagsInput: _Structure_ = {
  type: "structure",
  required: ["TimePeriod"],
  members: {
    SearchString: {
      shape: {
        type: "string"
      }
    },
    TimePeriod: {
      shape: _DateInterval
    },
    TagKey: {
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

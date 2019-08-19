import { _Options } from "./_Options";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartTaskExecutionInput: _Structure_ = {
  type: "structure",
  required: ["TaskArn"],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    },
    OverrideOptions: {
      shape: _Options
    },
    Includes: {
      shape: _FilterList
    }
  }
};

import { _Options } from "./_Options";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTaskInput: _Structure_ = {
  type: "structure",
  required: ["TaskArn"],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    },
    Options: {
      shape: _Options
    },
    Excludes: {
      shape: _FilterList
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CloudWatchLogGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};

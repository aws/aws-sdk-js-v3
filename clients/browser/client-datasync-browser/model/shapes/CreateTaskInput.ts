import { _Options } from "./_Options";
import { _FilterList } from "./_FilterList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTaskInput: _Structure_ = {
  type: "structure",
  required: ["SourceLocationArn", "DestinationLocationArn"],
  members: {
    SourceLocationArn: {
      shape: {
        type: "string"
      }
    },
    DestinationLocationArn: {
      shape: {
        type: "string"
      }
    },
    CloudWatchLogGroupArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Options: {
      shape: _Options
    },
    Excludes: {
      shape: _FilterList
    },
    Tags: {
      shape: _TagList
    }
  }
};

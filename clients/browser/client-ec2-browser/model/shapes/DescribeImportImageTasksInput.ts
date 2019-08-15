import { _FilterList } from "./_FilterList";
import { _ImportTaskIdList } from "./_ImportTaskIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImportImageTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Filters: {
      shape: _FilterList
    },
    ImportTaskIds: {
      shape: _ImportTaskIdList,
      locationName: "ImportTaskId"
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

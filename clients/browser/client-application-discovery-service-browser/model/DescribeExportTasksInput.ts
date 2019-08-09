import { _ExportIds } from "./_ExportIds";
import { _ExportFilters } from "./_ExportFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportIds: {
      shape: _ExportIds
    },
    filters: {
      shape: _ExportFilters
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

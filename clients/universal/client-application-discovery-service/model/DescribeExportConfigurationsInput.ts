import { _ExportIds } from "./_ExportIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportIds: {
      shape: _ExportIds
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

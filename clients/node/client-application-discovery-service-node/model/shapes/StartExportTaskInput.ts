import { _ExportDataFormats } from "./_ExportDataFormats";
import { _ExportFilters } from "./_ExportFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartExportTaskInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportDataFormat: {
      shape: _ExportDataFormats
    },
    filters: {
      shape: _ExportFilters
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

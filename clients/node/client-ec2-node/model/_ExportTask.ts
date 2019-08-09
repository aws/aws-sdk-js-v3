import { _ExportToS3Task } from "./_ExportToS3Task";
import { _InstanceExportDetails } from "./_InstanceExportDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    ExportTaskId: {
      shape: {
        type: "string"
      },
      locationName: "exportTaskId"
    },
    ExportToS3Task: {
      shape: _ExportToS3Task,
      locationName: "exportToS3"
    },
    InstanceExportDetails: {
      shape: _InstanceExportDetails,
      locationName: "instanceExport"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    }
  }
};

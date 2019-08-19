import { _ExportToS3TaskSpecification } from "./_ExportToS3TaskSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceExportTaskInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    ExportToS3Task: {
      shape: _ExportToS3TaskSpecification,
      locationName: "exportToS3"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    TargetEnvironment: {
      shape: {
        type: "string"
      },
      locationName: "targetEnvironment"
    }
  }
};

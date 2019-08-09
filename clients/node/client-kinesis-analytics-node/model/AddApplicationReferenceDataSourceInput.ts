import { _ReferenceDataSource } from "./_ReferenceDataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationReferenceDataSourceInput: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "CurrentApplicationVersionId",
    "ReferenceDataSource"
  ],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReferenceDataSource: {
      shape: _ReferenceDataSource
    }
  }
};

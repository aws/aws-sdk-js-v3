import { _S3ReferenceDataSourceDescription } from "./_S3ReferenceDataSourceDescription";
import { _SourceSchema } from "./_SourceSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReferenceDataSourceDescription: _Structure_ = {
  type: "structure",
  required: ["ReferenceId", "TableName", "S3ReferenceDataSourceDescription"],
  members: {
    ReferenceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3ReferenceDataSourceDescription: {
      shape: _S3ReferenceDataSourceDescription
    },
    ReferenceSchema: {
      shape: _SourceSchema
    }
  }
};

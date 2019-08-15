import { _S3ReferenceDataSourceUpdate } from "./_S3ReferenceDataSourceUpdate";
import { _SourceSchema } from "./_SourceSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReferenceDataSourceUpdate: _Structure_ = {
  type: "structure",
  required: ["ReferenceId"],
  members: {
    ReferenceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableNameUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3ReferenceDataSourceUpdate: {
      shape: _S3ReferenceDataSourceUpdate
    },
    ReferenceSchemaUpdate: {
      shape: _SourceSchema
    }
  }
};

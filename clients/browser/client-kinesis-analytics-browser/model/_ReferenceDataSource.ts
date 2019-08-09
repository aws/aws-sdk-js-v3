import { _S3ReferenceDataSource } from "./_S3ReferenceDataSource";
import { _SourceSchema } from "./_SourceSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReferenceDataSource: _Structure_ = {
  type: "structure",
  required: ["TableName", "ReferenceSchema"],
  members: {
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3ReferenceDataSource: {
      shape: _S3ReferenceDataSource
    },
    ReferenceSchema: {
      shape: _SourceSchema
    }
  }
};

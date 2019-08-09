import { _DatasetSchema } from "./_DatasetSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    schema: {
      shape: _DatasetSchema
    }
  }
};

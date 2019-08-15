import { _SchemaList } from "./_SchemaList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSchemasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Schemas: {
      shape: _SchemaList
    }
  }
};

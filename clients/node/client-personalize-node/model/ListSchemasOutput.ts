import { _Schemas } from "./_Schemas";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSchemasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    schemas: {
      shape: _Schemas
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

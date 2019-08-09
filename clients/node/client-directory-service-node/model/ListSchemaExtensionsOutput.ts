import { _SchemaExtensionsInfo } from "./_SchemaExtensionsInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSchemaExtensionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaExtensionsInfo: {
      shape: _SchemaExtensionsInfo
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

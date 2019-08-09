import { _Arns } from "./_Arns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListManagedSchemaArnsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaArns: {
      shape: _Arns
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

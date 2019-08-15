import { _IndexField } from "./_IndexField";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineIndexFieldInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "IndexField"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    IndexField: {
      shape: _IndexField
    }
  }
};

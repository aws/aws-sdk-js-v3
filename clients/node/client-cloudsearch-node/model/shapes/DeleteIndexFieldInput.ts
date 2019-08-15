import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteIndexFieldInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "IndexFieldName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    IndexFieldName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

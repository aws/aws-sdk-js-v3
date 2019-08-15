import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListImportsInput: _Structure_ = {
  type: "structure",
  required: ["ExportName"],
  members: {
    ExportName: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

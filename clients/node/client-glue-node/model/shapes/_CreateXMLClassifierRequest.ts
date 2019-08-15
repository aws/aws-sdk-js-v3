import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateXMLClassifierRequest: _Structure_ = {
  type: "structure",
  required: ["Classification", "Name"],
  members: {
    Classification: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RowTag: {
      shape: {
        type: "string"
      }
    }
  }
};

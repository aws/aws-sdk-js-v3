import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordColumn: _Structure_ = {
  type: "structure",
  required: ["Name", "SqlType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Mapping: {
      shape: {
        type: "string"
      }
    },
    SqlType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

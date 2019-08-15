import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FecOutputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ColumnDepth: {
      shape: {
        type: "integer",
        min: 4
      },
      locationName: "columnDepth"
    },
    IncludeFec: {
      shape: {
        type: "string"
      },
      locationName: "includeFec"
    },
    RowLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "rowLength"
    }
  }
};

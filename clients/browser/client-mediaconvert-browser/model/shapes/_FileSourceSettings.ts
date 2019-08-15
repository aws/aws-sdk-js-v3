import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileSourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Convert608To708: {
      shape: {
        type: "string"
      },
      locationName: "convert608To708"
    },
    SourceFile: {
      shape: {
        type: "string",
        min: 14
      },
      locationName: "sourceFile"
    },
    TimeDelta: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "timeDelta"
    }
  }
};

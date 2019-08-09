import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Locale: _Structure_ = {
  type: "structure",
  required: ["Country"],
  members: {
    Country: {
      shape: {
        type: "string",
        min: 2
      }
    },
    Subdivision: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};

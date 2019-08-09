import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompatibleImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmiId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Record: _Structure_ = {
  type: "structure",
  required: ["Data"],
  members: {
    Data: {
      shape: {
        type: "blob"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetThingShadowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    payload: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "payload"
};

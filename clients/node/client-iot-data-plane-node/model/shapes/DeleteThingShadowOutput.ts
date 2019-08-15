import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteThingShadowOutput: _Structure_ = {
  type: "structure",
  required: ["payload"],
  members: {
    payload: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "payload"
};

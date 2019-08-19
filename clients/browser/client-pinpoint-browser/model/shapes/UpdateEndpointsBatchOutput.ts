import { _MessageBody } from "./_MessageBody";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEndpointsBatchOutput: _Structure_ = {
  type: "structure",
  required: ["MessageBody"],
  members: {
    MessageBody: {
      shape: _MessageBody
    }
  },
  payload: "MessageBody"
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopMatchmakingInput: _Structure_ = {
  type: "structure",
  required: ["TicketId"],
  members: {
    TicketId: {
      shape: {
        type: "string"
      }
    }
  }
};

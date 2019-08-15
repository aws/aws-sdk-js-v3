import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptMatchInput: _Structure_ = {
  type: "structure",
  required: ["TicketId", "PlayerIds", "AcceptanceType"],
  members: {
    TicketId: {
      shape: {
        type: "string"
      }
    },
    PlayerIds: {
      shape: _StringList
    },
    AcceptanceType: {
      shape: {
        type: "string"
      }
    }
  }
};

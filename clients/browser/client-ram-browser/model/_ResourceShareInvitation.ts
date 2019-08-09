import { _ResourceShareAssociationList } from "./_ResourceShareAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceShareInvitation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareInvitationArn: {
      shape: {
        type: "string"
      }
    },
    resourceShareName: {
      shape: {
        type: "string"
      }
    },
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    senderAccountId: {
      shape: {
        type: "string"
      }
    },
    receiverAccountId: {
      shape: {
        type: "string"
      }
    },
    invitationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    resourceShareAssociations: {
      shape: _ResourceShareAssociationList
    }
  }
};

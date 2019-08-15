import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Master: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      },
      locationName: "accountId"
    },
    InvitationId: {
      shape: {
        type: "string"
      },
      locationName: "invitationId"
    },
    RelationshipStatus: {
      shape: {
        type: "string"
      },
      locationName: "relationshipStatus"
    },
    InvitedAt: {
      shape: {
        type: "string"
      },
      locationName: "invitedAt"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Member: _Structure_ = {
  type: "structure",
  required: [
    "AccountId",
    "MasterId",
    "Email",
    "RelationshipStatus",
    "UpdatedAt"
  ],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      },
      locationName: "accountId"
    },
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "detectorId"
    },
    MasterId: {
      shape: {
        type: "string"
      },
      locationName: "masterId"
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "email"
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
    },
    UpdatedAt: {
      shape: {
        type: "string"
      },
      locationName: "updatedAt"
    }
  }
};

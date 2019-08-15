import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptInvitationInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "MasterId", "InvitationId"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    MasterId: {
      shape: {
        type: "string"
      },
      locationName: "masterId"
    },
    InvitationId: {
      shape: {
        type: "string"
      },
      locationName: "invitationId"
    }
  }
};

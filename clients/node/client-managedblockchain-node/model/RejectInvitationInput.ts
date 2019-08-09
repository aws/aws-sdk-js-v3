import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectInvitationInput: _Structure_ = {
  type: "structure",
  required: ["InvitationId"],
  members: {
    InvitationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "invitationId"
    }
  }
};

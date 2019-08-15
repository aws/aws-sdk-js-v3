import { _Invitations } from "./_Invitations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInvitationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Invitations: {
      shape: _Invitations,
      locationName: "invitations"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};

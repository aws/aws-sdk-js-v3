import { _ResourceShareInvitationArnList } from "./_ResourceShareInvitationArnList";
import { _ResourceShareArnList } from "./_ResourceShareArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceShareInvitationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareInvitationArns: {
      shape: _ResourceShareInvitationArnList
    },
    resourceShareArns: {
      shape: _ResourceShareArnList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

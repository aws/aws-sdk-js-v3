import { _MemberConfiguration } from "./_MemberConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMemberInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientRequestToken",
    "InvitationId",
    "NetworkId",
    "MemberConfiguration"
  ],
  members: {
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InvitationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    MemberConfiguration: {
      shape: _MemberConfiguration
    }
  }
};

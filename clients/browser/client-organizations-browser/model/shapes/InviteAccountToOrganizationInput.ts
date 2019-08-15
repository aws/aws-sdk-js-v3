import { _HandshakeParty } from "./_HandshakeParty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InviteAccountToOrganizationInput: _Structure_ = {
  type: "structure",
  required: ["Target"],
  members: {
    Target: {
      shape: _HandshakeParty
    },
    Notes: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

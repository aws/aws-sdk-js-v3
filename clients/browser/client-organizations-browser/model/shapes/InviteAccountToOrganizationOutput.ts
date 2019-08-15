import { _Handshake } from "./_Handshake";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InviteAccountToOrganizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Handshake: {
      shape: _Handshake
    }
  }
};

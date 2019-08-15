import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateMemberFromGroupInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "GroupId", "MemberId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    GroupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    MemberId: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};

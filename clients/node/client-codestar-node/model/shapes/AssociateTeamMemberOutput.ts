import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateTeamMemberOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

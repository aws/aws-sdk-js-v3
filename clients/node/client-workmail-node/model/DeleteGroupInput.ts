import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGroupInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "GroupId"],
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
    }
  }
};

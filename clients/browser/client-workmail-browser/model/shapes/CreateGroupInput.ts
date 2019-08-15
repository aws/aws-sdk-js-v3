import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "Name"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

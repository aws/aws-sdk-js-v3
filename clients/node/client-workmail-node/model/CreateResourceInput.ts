import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "Name", "Type"],
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
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};

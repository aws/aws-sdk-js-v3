import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOrganizationalUnitInput: _Structure_ = {
  type: "structure",
  required: ["ParentId", "Name"],
  members: {
    ParentId: {
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

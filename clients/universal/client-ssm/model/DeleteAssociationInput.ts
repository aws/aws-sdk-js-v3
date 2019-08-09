import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAssociationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    AssociationId: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssociationVersion: {
      shape: {
        type: "string"
      }
    }
  }
};

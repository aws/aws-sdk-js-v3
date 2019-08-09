import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateWebACLInput: _Structure_ = {
  type: "structure",
  required: ["WebACLId", "ResourceArn"],
  members: {
    WebACLId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

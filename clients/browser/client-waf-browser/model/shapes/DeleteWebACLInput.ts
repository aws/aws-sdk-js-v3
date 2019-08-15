import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWebACLInput: _Structure_ = {
  type: "structure",
  required: ["WebACLId", "ChangeToken"],
  members: {
    WebACLId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

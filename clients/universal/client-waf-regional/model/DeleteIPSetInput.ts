import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteIPSetInput: _Structure_ = {
  type: "structure",
  required: ["IPSetId", "ChangeToken"],
  members: {
    IPSetId: {
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

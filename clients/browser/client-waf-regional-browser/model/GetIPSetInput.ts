import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIPSetInput: _Structure_ = {
  type: "structure",
  required: ["IPSetId"],
  members: {
    IPSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

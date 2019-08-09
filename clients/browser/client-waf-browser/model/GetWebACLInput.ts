import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWebACLInput: _Structure_ = {
  type: "structure",
  required: ["WebACLId"],
  members: {
    WebACLId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

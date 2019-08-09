import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBuiltinIntentInput: _Structure_ = {
  type: "structure",
  required: ["signature"],
  members: {
    signature: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "signature"
    }
  }
};

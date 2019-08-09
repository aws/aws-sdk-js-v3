import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEventSelectorsInput: _Structure_ = {
  type: "structure",
  required: ["TrailName"],
  members: {
    TrailName: {
      shape: {
        type: "string"
      }
    }
  }
};

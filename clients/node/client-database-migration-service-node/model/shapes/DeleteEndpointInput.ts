import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointArn"],
  members: {
    EndpointArn: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    }
  }
};

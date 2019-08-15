import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName", "EndpointConfigName"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    }
  }
};

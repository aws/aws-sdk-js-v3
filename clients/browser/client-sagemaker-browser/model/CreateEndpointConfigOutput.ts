import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEndpointConfigOutput: _Structure_ = {
  type: "structure",
  required: ["EndpointConfigArn"],
  members: {
    EndpointConfigArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};

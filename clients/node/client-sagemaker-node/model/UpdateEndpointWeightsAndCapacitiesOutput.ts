import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEndpointWeightsAndCapacitiesOutput: _Structure_ = {
  type: "structure",
  required: ["EndpointArn"],
  members: {
    EndpointArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};

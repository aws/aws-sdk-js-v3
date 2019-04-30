import { _EndpointBatchRequest } from "./_EndpointBatchRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEndpointsBatchInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "EndpointBatchRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    EndpointBatchRequest: {
      shape: _EndpointBatchRequest
    }
  },
  payload: "EndpointBatchRequest"
};

import { _EndpointsResponse } from "./_EndpointsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserEndpointsOutput: _Structure_ = {
  type: "structure",
  required: ["EndpointsResponse"],
  members: {
    EndpointsResponse: {
      shape: _EndpointsResponse
    }
  },
  payload: "EndpointsResponse"
};

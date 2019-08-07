import { _ListOfEndpointResponse } from "./_ListOfEndpointResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointsResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Item: {
      shape: _ListOfEndpointResponse
    }
  }
};

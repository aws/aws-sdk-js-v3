import { _EndpointList } from "./_EndpointList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Endpoints: {
      shape: _EndpointList
    }
  }
};

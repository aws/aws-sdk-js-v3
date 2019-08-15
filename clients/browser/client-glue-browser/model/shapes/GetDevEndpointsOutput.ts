import { _DevEndpointList } from "./_DevEndpointList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DevEndpoints: {
      shape: _DevEndpointList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

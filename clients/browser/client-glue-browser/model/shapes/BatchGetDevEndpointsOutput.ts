import { _DevEndpointList } from "./_DevEndpointList";
import { _DevEndpointNames } from "./_DevEndpointNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDevEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DevEndpoints: {
      shape: _DevEndpointList
    },
    DevEndpointsNotFound: {
      shape: _DevEndpointNames
    }
  }
};

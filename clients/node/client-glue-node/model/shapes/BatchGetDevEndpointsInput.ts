import { _DevEndpointNames } from "./_DevEndpointNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDevEndpointsInput: _Structure_ = {
  type: "structure",
  required: ["DevEndpointNames"],
  members: {
    DevEndpointNames: {
      shape: _DevEndpointNames
    }
  }
};

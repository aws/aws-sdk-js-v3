import { _DevEndpointNameList } from "./_DevEndpointNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DevEndpointNames: {
      shape: _DevEndpointNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

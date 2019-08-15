import { _EndpointGroups } from "./_EndpointGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointGroups: {
      shape: _EndpointGroups
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _DataflowEndpointGroupList } from "./_DataflowEndpointGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDataflowEndpointGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataflowEndpointGroupList: {
      shape: _DataflowEndpointGroupList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

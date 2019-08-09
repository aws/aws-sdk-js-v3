import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataflowEndpointListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataflowEndpointGroupArn: {
      shape: {
        type: "string"
      }
    },
    dataflowEndpointGroupId: {
      shape: {
        type: "string"
      }
    }
  }
};

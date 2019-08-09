import { _EndpointDetailsList } from "./_EndpointDetailsList";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataflowEndpointGroupOutput: _Structure_ = {
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
    },
    endpointsDetails: {
      shape: _EndpointDetailsList
    },
    tags: {
      shape: _TagsMap
    }
  }
};

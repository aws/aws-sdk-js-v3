import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataflowEndpointGroupInput: _Structure_ = {
  type: "structure",
  required: ["dataflowEndpointGroupId"],
  members: {
    dataflowEndpointGroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "dataflowEndpointGroupId"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    endpointType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "endpointType"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualServicesInput: _Structure_ = {
  type: "structure",
  required: ["meshName"],
  members: {
    limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDedicatedIpsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PoolName: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "PoolName"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    },
    PageSize: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "PageSize"
    }
  }
};

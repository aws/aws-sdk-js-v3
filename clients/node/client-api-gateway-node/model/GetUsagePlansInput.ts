import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlansInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "position"
    },
    keyId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "keyId"
    },
    limit: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "limit"
    }
  }
};

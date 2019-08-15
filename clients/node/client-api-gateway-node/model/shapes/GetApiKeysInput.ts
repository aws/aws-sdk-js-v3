import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApiKeysInput: _Structure_ = {
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
    limit: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "limit"
    },
    nameQuery: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    customerId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "customerId"
    },
    includeValues: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeValues"
    }
  }
};

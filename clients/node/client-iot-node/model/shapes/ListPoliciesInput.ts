import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "marker"
    },
    pageSize: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "pageSize"
    },
    ascendingOrder: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "isAscendingOrder"
    }
  }
};

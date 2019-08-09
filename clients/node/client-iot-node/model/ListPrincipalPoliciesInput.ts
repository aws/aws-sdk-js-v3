import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPrincipalPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["principal"],
  members: {
    principal: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amzn-iot-principal"
    },
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

import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPolicyPrincipalsInput: _Structure_ = {
  type: "structure",
  required: ["policyName"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "x-amzn-iot-policy"
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

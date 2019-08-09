import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPhoneNumbersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    },
    ProductType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "product-type"
    },
    FilterName: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "filter-name"
    },
    FilterValue: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "filter-value"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "max-results"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    }
  }
};

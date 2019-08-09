import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVersionsByFunctionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    Marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Marker"
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "MaxItems"
    }
  }
};

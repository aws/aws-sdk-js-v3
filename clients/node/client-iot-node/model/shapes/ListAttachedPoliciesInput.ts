import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttachedPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["target"],
  members: {
    target: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "target"
    },
    recursive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "recursive"
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
    }
  }
};

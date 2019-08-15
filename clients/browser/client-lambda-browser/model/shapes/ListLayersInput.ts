import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLayersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CompatibleRuntime: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "CompatibleRuntime"
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

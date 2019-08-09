import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLayerVersionsInput: _Structure_ = {
  type: "structure",
  required: ["LayerName"],
  members: {
    CompatibleRuntime: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "CompatibleRuntime"
    },
    LayerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "LayerName"
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

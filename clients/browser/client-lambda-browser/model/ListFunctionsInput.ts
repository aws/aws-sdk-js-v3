import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MasterRegion: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MasterRegion"
    },
    FunctionVersion: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "FunctionVersion"
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

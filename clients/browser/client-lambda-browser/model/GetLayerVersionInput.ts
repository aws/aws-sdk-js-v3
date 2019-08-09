import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLayerVersionInput: _Structure_ = {
  type: "structure",
  required: ["LayerName", "VersionNumber"],
  members: {
    LayerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "LayerName"
    },
    VersionNumber: {
      shape: {
        type: "integer"
      },
      location: "uri",
      locationName: "VersionNumber"
    }
  }
};

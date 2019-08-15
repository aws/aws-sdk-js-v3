import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMountTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "MaxItems"
    },
    Marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Marker"
    },
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "FileSystemId"
    },
    MountTargetId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MountTargetId"
    }
  }
};

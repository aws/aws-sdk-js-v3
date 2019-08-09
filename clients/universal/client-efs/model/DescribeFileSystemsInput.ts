import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFileSystemsInput: _Structure_ = {
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
    CreationToken: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "CreationToken"
    },
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "FileSystemId"
    }
  }
};

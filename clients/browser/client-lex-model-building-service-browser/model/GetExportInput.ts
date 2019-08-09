import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExportInput: _Structure_ = {
  type: "structure",
  required: ["name", "version", "resourceType", "exportType"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "name"
    },
    version: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "version"
    },
    resourceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceType"
    },
    exportType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "exportType"
    }
  }
};

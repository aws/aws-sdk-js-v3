import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    region: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "region"
    },
    contents: {
      shape: {
        type: "blob"
      }
    },
    snapshotId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "snapshotId"
    }
  },
  payload: "contents"
};

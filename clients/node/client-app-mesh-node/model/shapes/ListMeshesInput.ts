import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMeshesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};

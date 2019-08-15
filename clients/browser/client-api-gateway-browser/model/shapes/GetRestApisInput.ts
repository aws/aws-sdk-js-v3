import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRestApisInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "position"
    },
    limit: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "limit"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ascending: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Ascending"
    },
    PageToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "PageToken"
    }
  }
};

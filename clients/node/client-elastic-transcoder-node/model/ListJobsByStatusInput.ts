import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsByStatusInput: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Status"
    },
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

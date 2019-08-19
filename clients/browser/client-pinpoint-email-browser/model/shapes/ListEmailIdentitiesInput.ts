import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEmailIdentitiesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    },
    PageSize: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "PageSize"
    }
  }
};

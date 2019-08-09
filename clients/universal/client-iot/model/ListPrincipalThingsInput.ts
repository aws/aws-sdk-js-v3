import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPrincipalThingsInput: _Structure_ = {
  type: "structure",
  required: ["principal"],
  members: {
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    principal: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amzn-principal"
    }
  }
};

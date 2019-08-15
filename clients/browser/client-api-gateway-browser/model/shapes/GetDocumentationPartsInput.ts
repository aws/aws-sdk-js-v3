import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentationPartsInput: _Structure_ = {
  type: "structure",
  required: ["restApiId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    type: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "type"
    },
    nameQuery: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    path: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "path"
    },
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
    },
    locationStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "locationStatus"
    }
  }
};

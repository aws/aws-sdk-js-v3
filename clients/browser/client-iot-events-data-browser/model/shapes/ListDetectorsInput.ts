import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorsInput: _Structure_ = {
  type: "structure",
  required: ["detectorModelName"],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorModelName"
    },
    stateName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "stateName"
    },
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
    }
  }
};

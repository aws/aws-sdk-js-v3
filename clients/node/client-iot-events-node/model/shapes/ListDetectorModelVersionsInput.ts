import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorModelVersionsInput: _Structure_ = {
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

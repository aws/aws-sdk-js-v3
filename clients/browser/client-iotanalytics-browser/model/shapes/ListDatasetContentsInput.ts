import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetContentsInput: _Structure_ = {
  type: "structure",
  required: ["datasetName"],
  members: {
    datasetName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "datasetName"
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
    },
    scheduledOnOrAfter: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "scheduledOnOrAfter"
    },
    scheduledBefore: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "scheduledBefore"
    }
  }
};

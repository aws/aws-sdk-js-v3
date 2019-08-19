import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDatasetContentInput: _Structure_ = {
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
    versionId: {
      shape: {
        type: "string",
        min: 7
      },
      location: "querystring",
      locationName: "versionId"
    }
  }
};

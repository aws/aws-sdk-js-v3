import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: ["accountId", "vaultName"],
  members: {
    accountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    vaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "vaultName"
    },
    limit: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "limit"
    },
    marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "marker"
    },
    statuscode: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "statuscode"
    },
    completed: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "completed"
    }
  }
};

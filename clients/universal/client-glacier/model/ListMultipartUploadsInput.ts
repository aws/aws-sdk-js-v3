import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMultipartUploadsInput: _Structure_ = {
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
    marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "marker"
    },
    limit: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "limit"
    }
  }
};

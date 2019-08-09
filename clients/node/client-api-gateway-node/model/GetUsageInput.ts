import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsageInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId", "startDate", "endDate"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
    },
    keyId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "keyId"
    },
    startDate: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "startDate"
    },
    endDate: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "endDate"
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
    }
  }
};

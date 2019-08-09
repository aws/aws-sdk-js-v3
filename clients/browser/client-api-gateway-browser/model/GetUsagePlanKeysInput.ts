import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlanKeysInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
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
    nameQuery: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    }
  }
};

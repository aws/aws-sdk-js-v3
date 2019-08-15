import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInvalidationsInput: _Structure_ = {
  type: "structure",
  required: ["DistributionId"],
  members: {
    DistributionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DistributionId"
    },
    Marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Marker"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxItems"
    }
  }
};

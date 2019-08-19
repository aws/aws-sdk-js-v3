import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInvalidationInput: _Structure_ = {
  type: "structure",
  required: ["DistributionId", "Id"],
  members: {
    DistributionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DistributionId"
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDistributionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    IfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "If-Match"
    }
  }
};

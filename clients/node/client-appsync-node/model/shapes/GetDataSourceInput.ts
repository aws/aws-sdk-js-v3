import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataSourceInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "name"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    name: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "name"
    }
  }
};

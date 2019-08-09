import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "functionId"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    functionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "functionId"
    }
  }
};

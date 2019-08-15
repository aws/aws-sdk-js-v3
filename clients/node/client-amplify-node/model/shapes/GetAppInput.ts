import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAppInput: _Structure_ = {
  type: "structure",
  required: ["appId"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    }
  }
};

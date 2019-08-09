import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSdkTypeInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "sdktype_id"
    }
  }
};

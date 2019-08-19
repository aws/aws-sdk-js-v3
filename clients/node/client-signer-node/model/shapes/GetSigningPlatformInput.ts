import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSigningPlatformInput: _Structure_ = {
  type: "structure",
  required: ["platformId"],
  members: {
    platformId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "platformId"
    }
  }
};

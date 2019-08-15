import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSigningProfileInput: _Structure_ = {
  type: "structure",
  required: ["profileName"],
  members: {
    profileName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "profileName"
    }
  }
};

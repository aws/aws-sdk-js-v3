import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPhoneNumberOrderInput: _Structure_ = {
  type: "structure",
  required: ["PhoneNumberOrderId"],
  members: {
    PhoneNumberOrderId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "phoneNumberOrderId"
    }
  }
};

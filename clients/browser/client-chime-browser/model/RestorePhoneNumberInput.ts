import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestorePhoneNumberInput: _Structure_ = {
  type: "structure",
  required: ["PhoneNumberId"],
  members: {
    PhoneNumberId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "phoneNumberId"
    }
  }
};

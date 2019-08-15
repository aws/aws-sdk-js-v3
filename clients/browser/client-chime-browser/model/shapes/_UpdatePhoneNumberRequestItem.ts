import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdatePhoneNumberRequestItem: _Structure_ = {
  type: "structure",
  required: ["PhoneNumberId"],
  members: {
    PhoneNumberId: {
      shape: {
        type: "string"
      }
    },
    ProductType: {
      shape: {
        type: "string"
      }
    }
  }
};

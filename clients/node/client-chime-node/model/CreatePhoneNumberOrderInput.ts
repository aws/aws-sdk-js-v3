import { _E164PhoneNumberList } from "./_E164PhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePhoneNumberOrderInput: _Structure_ = {
  type: "structure",
  required: ["ProductType", "E164PhoneNumbers"],
  members: {
    ProductType: {
      shape: {
        type: "string"
      }
    },
    E164PhoneNumbers: {
      shape: _E164PhoneNumberList
    }
  }
};

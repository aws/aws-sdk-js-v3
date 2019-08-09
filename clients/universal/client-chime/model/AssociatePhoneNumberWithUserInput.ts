import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociatePhoneNumberWithUserInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UserId", "E164PhoneNumber"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "userId"
    },
    E164PhoneNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

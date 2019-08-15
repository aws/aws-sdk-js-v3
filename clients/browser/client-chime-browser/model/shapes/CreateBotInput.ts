import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBotInput: _Structure_ = {
  type: "structure",
  required: ["DisplayName", "AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    DisplayName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Domain: {
      shape: {
        type: "string"
      }
    }
  }
};

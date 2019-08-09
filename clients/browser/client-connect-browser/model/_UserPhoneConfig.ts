import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPhoneConfig: _Structure_ = {
  type: "structure",
  required: ["PhoneType"],
  members: {
    PhoneType: {
      shape: {
        type: "string"
      }
    },
    AutoAccept: {
      shape: {
        type: "boolean"
      }
    },
    AfterContactWorkTimeLimit: {
      shape: {
        type: "integer"
      }
    },
    DeskPhoneNumber: {
      shape: {
        type: "string"
      }
    }
  }
};

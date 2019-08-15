import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderedPhoneNumber: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    E164PhoneNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};

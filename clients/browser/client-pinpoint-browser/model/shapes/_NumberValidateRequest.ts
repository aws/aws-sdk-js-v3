import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NumberValidateRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IsoCountryCode: {
      shape: {
        type: "string"
      }
    },
    PhoneNumber: {
      shape: {
        type: "string"
      }
    }
  }
};

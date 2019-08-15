import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PSTNDialIn: _Structure_ = {
  type: "structure",
  required: [
    "CountryCode",
    "PhoneNumber",
    "OneClickIdDelay",
    "OneClickPinDelay"
  ],
  members: {
    CountryCode: {
      shape: {
        type: "string"
      }
    },
    PhoneNumber: {
      shape: {
        type: "string"
      }
    },
    OneClickIdDelay: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OneClickPinDelay: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

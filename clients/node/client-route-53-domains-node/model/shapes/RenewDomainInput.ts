import { Structure as _Structure_ } from "@aws-sdk/types";

export const RenewDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "CurrentExpiryYear"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    DurationInYears: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CurrentExpiryYear: {
      shape: {
        type: "integer"
      }
    }
  }
};

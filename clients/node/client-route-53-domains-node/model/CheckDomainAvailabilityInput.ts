import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDomainAvailabilityInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    IdnLangCode: {
      shape: {
        type: "string"
      }
    }
  }
};

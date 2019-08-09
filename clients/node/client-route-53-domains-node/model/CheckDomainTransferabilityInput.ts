import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDomainTransferabilityInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    AuthCode: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

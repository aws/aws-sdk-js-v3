import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDomainInput: _Structure_ = {
  type: "structure",
  required: ["domainName"],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};

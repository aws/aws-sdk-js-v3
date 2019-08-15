import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAddressInput: _Structure_ = {
  type: "structure",
  required: ["AddressId"],
  members: {
    AddressId: {
      shape: {
        type: "string",
        min: 40
      }
    }
  }
};

import { _Address } from "./_Address";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAddressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Address: {
      shape: _Address
    }
  }
};

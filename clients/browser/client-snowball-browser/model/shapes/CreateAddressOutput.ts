import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAddressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AddressId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

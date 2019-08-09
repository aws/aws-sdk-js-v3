import { _Address } from "./_Address";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAddressInput: _Structure_ = {
  type: "structure",
  required: ["Address"],
  members: {
    Address: {
      shape: _Address
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveCustomerInput: _Structure_ = {
  type: "structure",
  required: ["RegistrationToken"],
  members: {
    RegistrationToken: {
      shape: {
        type: "string"
      }
    }
  }
};

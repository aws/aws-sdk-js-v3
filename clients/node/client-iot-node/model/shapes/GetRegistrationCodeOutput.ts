import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegistrationCodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registrationCode: {
      shape: {
        type: "string",
        min: 64
      }
    }
  }
};

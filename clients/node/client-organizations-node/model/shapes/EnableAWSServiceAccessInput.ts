import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableAWSServiceAccessInput: _Structure_ = {
  type: "structure",
  required: ["ServicePrincipal"],
  members: {
    ServicePrincipal: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

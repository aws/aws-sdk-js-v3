import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceLinkedRoleFailure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ServiceLinkedRoleFailure",
  exceptionCode: "ServiceLinkedRoleFailure"
};

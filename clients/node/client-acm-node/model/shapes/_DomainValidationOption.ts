import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainValidationOption: _Structure_ = {
  type: "structure",
  required: ["DomainName", "ValidationDomain"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ValidationDomain: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

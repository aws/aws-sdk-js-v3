import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyDomainDkimInput: _Structure_ = {
  type: "structure",
  required: ["Domain"],
  members: {
    Domain: {
      shape: {
        type: "string"
      }
    }
  }
};

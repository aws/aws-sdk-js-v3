import { Structure as _Structure_ } from "@aws-sdk/types";

export const RetrieveDomainAuthCodeOutput: _Structure_ = {
  type: "structure",
  required: ["AuthCode"],
  members: {
    AuthCode: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

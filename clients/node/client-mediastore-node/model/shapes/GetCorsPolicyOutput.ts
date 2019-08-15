import { _CorsPolicy } from "./_CorsPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCorsPolicyOutput: _Structure_ = {
  type: "structure",
  required: ["CorsPolicy"],
  members: {
    CorsPolicy: {
      shape: _CorsPolicy
    }
  }
};

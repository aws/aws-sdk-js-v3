import { _CorsPolicy } from "./_CorsPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutCorsPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName", "CorsPolicy"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CorsPolicy: {
      shape: _CorsPolicy
    }
  }
};

import { _FunctionExecutionConfig } from "./_FunctionExecutionConfig";
import { ___listOfResourceAccessPolicy } from "./___listOfResourceAccessPolicy";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionConfigurationEnvironment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessSysfs: {
      shape: {
        type: "boolean"
      }
    },
    Execution: {
      shape: _FunctionExecutionConfig
    },
    ResourceAccessPolicies: {
      shape: ___listOfResourceAccessPolicy
    },
    Variables: {
      shape: ___mapOf__string
    }
  }
};

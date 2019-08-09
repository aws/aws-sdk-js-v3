import { GetMinuteUsageInput } from "./GetMinuteUsageInput";
import { GetMinuteUsageOutput } from "./GetMinuteUsageOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMinuteUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMinuteUsage",
  http: {
    method: "POST",
    requestUri: "/minute-usage"
  },
  input: {
    shape: GetMinuteUsageInput
  },
  output: {
    shape: GetMinuteUsageOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

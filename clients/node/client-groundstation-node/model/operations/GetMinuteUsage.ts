import { GetMinuteUsageInput } from "../shapes/GetMinuteUsageInput";
import { GetMinuteUsageOutput } from "../shapes/GetMinuteUsageOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

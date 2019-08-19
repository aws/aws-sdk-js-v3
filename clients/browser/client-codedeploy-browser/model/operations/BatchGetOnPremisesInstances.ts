import { BatchGetOnPremisesInstancesInput } from "../shapes/BatchGetOnPremisesInstancesInput";
import { BatchGetOnPremisesInstancesOutput } from "../shapes/BatchGetOnPremisesInstancesOutput";
import { InstanceNameRequiredException } from "../shapes/InstanceNameRequiredException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetOnPremisesInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetOnPremisesInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetOnPremisesInstancesInput
  },
  output: {
    shape: BatchGetOnPremisesInstancesOutput
  },
  errors: [
    {
      shape: InstanceNameRequiredException
    },
    {
      shape: InvalidInstanceNameException
    },
    {
      shape: BatchLimitExceededException
    }
  ]
};

import { BatchGetOnPremisesInstancesInput } from "./BatchGetOnPremisesInstancesInput";
import { BatchGetOnPremisesInstancesOutput } from "./BatchGetOnPremisesInstancesOutput";
import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

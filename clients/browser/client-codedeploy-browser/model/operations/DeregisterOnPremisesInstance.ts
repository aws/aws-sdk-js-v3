import { DeregisterOnPremisesInstanceInput } from "../shapes/DeregisterOnPremisesInstanceInput";
import { DeregisterOnPremisesInstanceOutput } from "../shapes/DeregisterOnPremisesInstanceOutput";
import { InstanceNameRequiredException } from "../shapes/InstanceNameRequiredException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterOnPremisesInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterOnPremisesInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterOnPremisesInstanceInput
  },
  output: {
    shape: DeregisterOnPremisesInstanceOutput
  },
  errors: [
    {
      shape: InstanceNameRequiredException
    },
    {
      shape: InvalidInstanceNameException
    }
  ]
};

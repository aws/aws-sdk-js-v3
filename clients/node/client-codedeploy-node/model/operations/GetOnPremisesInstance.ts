import { GetOnPremisesInstanceInput } from "../shapes/GetOnPremisesInstanceInput";
import { GetOnPremisesInstanceOutput } from "../shapes/GetOnPremisesInstanceOutput";
import { InstanceNameRequiredException } from "../shapes/InstanceNameRequiredException";
import { InstanceNotRegisteredException } from "../shapes/InstanceNotRegisteredException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOnPremisesInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOnPremisesInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOnPremisesInstanceInput
  },
  output: {
    shape: GetOnPremisesInstanceOutput
  },
  errors: [
    {
      shape: InstanceNameRequiredException
    },
    {
      shape: InstanceNotRegisteredException
    },
    {
      shape: InvalidInstanceNameException
    }
  ]
};

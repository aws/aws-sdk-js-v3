import { GetOnPremisesInstanceInput } from "./GetOnPremisesInstanceInput";
import { GetOnPremisesInstanceOutput } from "./GetOnPremisesInstanceOutput";
import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InstanceNotRegisteredException } from "./InstanceNotRegisteredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

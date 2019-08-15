import { GetPolicyInput } from "../shapes/GetPolicyInput";
import { GetPolicyOutput } from "../shapes/GetPolicyOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPolicy",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}/policy"
  },
  input: {
    shape: GetPolicyInput
  },
  output: {
    shape: GetPolicyOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};

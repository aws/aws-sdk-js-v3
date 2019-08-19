import { GetPolicyInput } from "../shapes/GetPolicyInput";
import { GetPolicyOutput } from "../shapes/GetPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPolicyInput
  },
  output: {
    shape: GetPolicyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidTypeException
    }
  ]
};

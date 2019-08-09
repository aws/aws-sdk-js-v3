import { GetPolicyInput } from "./GetPolicyInput";
import { GetPolicyOutput } from "./GetPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidTypeException } from "./InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

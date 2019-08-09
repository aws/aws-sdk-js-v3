import { PutPolicyInput } from "./PutPolicyInput";
import { PutPolicyOutput } from "./PutPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidTypeException } from "./InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPolicyInput
  },
  output: {
    shape: PutPolicyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidTypeException
    }
  ]
};

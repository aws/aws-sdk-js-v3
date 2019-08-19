import { PutPolicyInput } from "../shapes/PutPolicyInput";
import { PutPolicyOutput } from "../shapes/PutPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

import { CreatePolicyInput } from "../shapes/CreatePolicyInput";
import { CreatePolicyOutput } from "../shapes/CreatePolicyOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { MalformedPolicyException } from "../shapes/MalformedPolicyException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePolicy",
  http: {
    method: "POST",
    requestUri: "/policies/{policyName}"
  },
  input: {
    shape: CreatePolicyInput
  },
  output: {
    shape: CreatePolicyOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: MalformedPolicyException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};

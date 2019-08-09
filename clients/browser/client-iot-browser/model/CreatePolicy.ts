import { CreatePolicyInput } from "./CreatePolicyInput";
import { CreatePolicyOutput } from "./CreatePolicyOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { MalformedPolicyException } from "./MalformedPolicyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

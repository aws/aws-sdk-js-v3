import { ListTargetsForSecurityProfileInput } from "../shapes/ListTargetsForSecurityProfileInput";
import { ListTargetsForSecurityProfileOutput } from "../shapes/ListTargetsForSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTargetsForSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTargetsForSecurityProfile",
  http: {
    method: "GET",
    requestUri: "/security-profiles/{securityProfileName}/targets"
  },
  input: {
    shape: ListTargetsForSecurityProfileInput
  },
  output: {
    shape: ListTargetsForSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};

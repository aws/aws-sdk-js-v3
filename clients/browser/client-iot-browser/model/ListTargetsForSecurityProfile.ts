import { ListTargetsForSecurityProfileInput } from "./ListTargetsForSecurityProfileInput";
import { ListTargetsForSecurityProfileOutput } from "./ListTargetsForSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

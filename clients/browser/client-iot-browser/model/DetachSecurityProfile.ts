import { DetachSecurityProfileInput } from "./DetachSecurityProfileInput";
import { DetachSecurityProfileOutput } from "./DetachSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachSecurityProfile",
  http: {
    method: "DELETE",
    requestUri: "/security-profiles/{securityProfileName}/targets"
  },
  input: {
    shape: DetachSecurityProfileInput
  },
  output: {
    shape: DetachSecurityProfileOutput
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

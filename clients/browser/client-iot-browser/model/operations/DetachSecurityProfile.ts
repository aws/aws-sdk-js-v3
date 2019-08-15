import { DetachSecurityProfileInput } from "../shapes/DetachSecurityProfileInput";
import { DetachSecurityProfileOutput } from "../shapes/DetachSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

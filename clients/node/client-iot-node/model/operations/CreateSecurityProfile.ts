import { CreateSecurityProfileInput } from "../shapes/CreateSecurityProfileInput";
import { CreateSecurityProfileOutput } from "../shapes/CreateSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecurityProfile",
  http: {
    method: "POST",
    requestUri: "/security-profiles/{securityProfileName}"
  },
  input: {
    shape: CreateSecurityProfileInput
  },
  output: {
    shape: CreateSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};

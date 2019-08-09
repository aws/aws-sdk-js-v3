import { CreateSecurityProfileInput } from "./CreateSecurityProfileInput";
import { CreateSecurityProfileOutput } from "./CreateSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

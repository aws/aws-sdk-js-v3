import { EnableSharingWithAwsOrganizationInput } from "../shapes/EnableSharingWithAwsOrganizationInput";
import { EnableSharingWithAwsOrganizationOutput } from "../shapes/EnableSharingWithAwsOrganizationOutput";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableSharingWithAwsOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableSharingWithAwsOrganization",
  http: {
    method: "POST",
    requestUri: "/enablesharingwithawsorganization"
  },
  input: {
    shape: EnableSharingWithAwsOrganizationInput
  },
  output: {
    shape: EnableSharingWithAwsOrganizationOutput
  },
  errors: [
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};

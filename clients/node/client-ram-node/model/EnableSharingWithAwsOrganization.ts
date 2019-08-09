import { EnableSharingWithAwsOrganizationInput } from "./EnableSharingWithAwsOrganizationInput";
import { EnableSharingWithAwsOrganizationOutput } from "./EnableSharingWithAwsOrganizationOutput";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

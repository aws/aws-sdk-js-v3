import { EnableAWSOrganizationsAccessInput } from "../shapes/EnableAWSOrganizationsAccessInput";
import { EnableAWSOrganizationsAccessOutput } from "../shapes/EnableAWSOrganizationsAccessOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableAWSOrganizationsAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableAWSOrganizationsAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableAWSOrganizationsAccessInput
  },
  output: {
    shape: EnableAWSOrganizationsAccessOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};

import { EnableAWSOrganizationsAccessInput } from "./EnableAWSOrganizationsAccessInput";
import { EnableAWSOrganizationsAccessOutput } from "./EnableAWSOrganizationsAccessOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

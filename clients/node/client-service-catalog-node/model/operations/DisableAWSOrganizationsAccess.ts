import { DisableAWSOrganizationsAccessInput } from "../shapes/DisableAWSOrganizationsAccessInput";
import { DisableAWSOrganizationsAccessOutput } from "../shapes/DisableAWSOrganizationsAccessOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableAWSOrganizationsAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableAWSOrganizationsAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableAWSOrganizationsAccessInput
  },
  output: {
    shape: DisableAWSOrganizationsAccessOutput
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

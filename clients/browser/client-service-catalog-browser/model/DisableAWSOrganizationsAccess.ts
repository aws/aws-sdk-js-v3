import { DisableAWSOrganizationsAccessInput } from "./DisableAWSOrganizationsAccessInput";
import { DisableAWSOrganizationsAccessOutput } from "./DisableAWSOrganizationsAccessOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

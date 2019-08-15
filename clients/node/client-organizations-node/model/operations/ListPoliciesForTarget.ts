import { ListPoliciesForTargetInput } from "../shapes/ListPoliciesForTargetInput";
import { ListPoliciesForTargetOutput } from "../shapes/ListPoliciesForTargetOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TargetNotFoundException } from "../shapes/TargetNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPoliciesForTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPoliciesForTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPoliciesForTargetInput
  },
  output: {
    shape: ListPoliciesForTargetOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TargetNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

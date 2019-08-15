import { ListPoliciesInput } from "../shapes/ListPoliciesInput";
import { ListPoliciesOutput } from "../shapes/ListPoliciesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPoliciesInput
  },
  output: {
    shape: ListPoliciesOutput
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
      shape: TooManyRequestsException
    }
  ]
};

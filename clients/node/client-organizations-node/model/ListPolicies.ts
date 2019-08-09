import { ListPoliciesInput } from "./ListPoliciesInput";
import { ListPoliciesOutput } from "./ListPoliciesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

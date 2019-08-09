import { ListPoliciesForTargetInput } from "./ListPoliciesForTargetInput";
import { ListPoliciesForTargetOutput } from "./ListPoliciesForTargetOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

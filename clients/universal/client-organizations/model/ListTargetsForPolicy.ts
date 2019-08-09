import { ListTargetsForPolicyInput } from "./ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "./ListTargetsForPolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTargetsForPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTargetsForPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTargetsForPolicyInput
  },
  output: {
    shape: ListTargetsForPolicyOutput
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
      shape: PolicyNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

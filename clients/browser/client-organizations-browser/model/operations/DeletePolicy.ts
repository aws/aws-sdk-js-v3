import { DeletePolicyInput } from "../shapes/DeletePolicyInput";
import { DeletePolicyOutput } from "../shapes/DeletePolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyInUseException } from "../shapes/PolicyInUseException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePolicyInput
  },
  output: {
    shape: DeletePolicyOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyInUseException
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

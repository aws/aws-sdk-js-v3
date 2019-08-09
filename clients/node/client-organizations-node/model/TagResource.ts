import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: TargetNotFoundException
    },
    {
      shape: ConstraintViolationException
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

import { ListRootsInput } from "../shapes/ListRootsInput";
import { ListRootsOutput } from "../shapes/ListRootsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRoots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRootsInput
  },
  output: {
    shape: ListRootsOutput
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

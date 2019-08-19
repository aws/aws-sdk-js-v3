import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
export type ListUserHierarchyGroupsExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalServiceException;

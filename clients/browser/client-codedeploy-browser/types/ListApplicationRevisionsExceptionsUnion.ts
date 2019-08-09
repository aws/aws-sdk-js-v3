import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { InvalidSortByException } from "./InvalidSortByException";
import { InvalidSortOrderException } from "./InvalidSortOrderException";
import { InvalidBucketNameFilterException } from "./InvalidBucketNameFilterException";
import { InvalidKeyPrefixFilterException } from "./InvalidKeyPrefixFilterException";
import { BucketNameFilterRequiredException } from "./BucketNameFilterRequiredException";
import { InvalidDeployedStateFilterException } from "./InvalidDeployedStateFilterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListApplicationRevisionsExceptionsUnion =
  | ApplicationDoesNotExistException
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | InvalidSortByException
  | InvalidSortOrderException
  | InvalidBucketNameFilterException
  | InvalidKeyPrefixFilterException
  | BucketNameFilterRequiredException
  | InvalidDeployedStateFilterException
  | InvalidNextTokenException;

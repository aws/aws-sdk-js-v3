import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateProvisioningArtifactExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | LimitExceededException;

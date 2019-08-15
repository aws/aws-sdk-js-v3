import { DeleteRelationalDatabaseSnapshotInput } from "../shapes/DeleteRelationalDatabaseSnapshotInput";
import { DeleteRelationalDatabaseSnapshotOutput } from "../shapes/DeleteRelationalDatabaseSnapshotOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationFailureException } from "../shapes/OperationFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AccountSetupInProgressException } from "../shapes/AccountSetupInProgressException";
import { UnauthenticatedException } from "../shapes/UnauthenticatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRelationalDatabaseSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRelationalDatabaseSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRelationalDatabaseSnapshotInput
  },
  output: {
    shape: DeleteRelationalDatabaseSnapshotOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: NotFoundException
    },
    {
      shape: OperationFailureException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: AccountSetupInProgressException
    },
    {
      shape: UnauthenticatedException
    }
  ]
};

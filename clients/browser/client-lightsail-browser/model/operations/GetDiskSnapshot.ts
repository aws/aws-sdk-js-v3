import { GetDiskSnapshotInput } from "../shapes/GetDiskSnapshotInput";
import { GetDiskSnapshotOutput } from "../shapes/GetDiskSnapshotOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationFailureException } from "../shapes/OperationFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AccountSetupInProgressException } from "../shapes/AccountSetupInProgressException";
import { UnauthenticatedException } from "../shapes/UnauthenticatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDiskSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDiskSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDiskSnapshotInput
  },
  output: {
    shape: GetDiskSnapshotOutput
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

import { DeleteKeyPairInput } from "./DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "./DeleteKeyPairOutput";
import { ServiceException } from "./ServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { NotFoundException } from "./NotFoundException";
import { OperationFailureException } from "./OperationFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountSetupInProgressException } from "./AccountSetupInProgressException";
import { UnauthenticatedException } from "./UnauthenticatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteKeyPair: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteKeyPair",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteKeyPairInput
  },
  output: {
    shape: DeleteKeyPairOutput
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

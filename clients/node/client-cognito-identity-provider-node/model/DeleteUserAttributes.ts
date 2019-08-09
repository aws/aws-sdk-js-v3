import { DeleteUserAttributesInput } from "./DeleteUserAttributesInput";
import { DeleteUserAttributesOutput } from "./DeleteUserAttributesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUserAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserAttributesInput
  },
  output: {
    shape: DeleteUserAttributesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: InternalErrorException
    }
  ]
};

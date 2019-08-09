import { UpdateAuthEventFeedbackInput } from "./UpdateAuthEventFeedbackInput";
import { UpdateAuthEventFeedbackOutput } from "./UpdateAuthEventFeedbackOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAuthEventFeedback: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAuthEventFeedback",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAuthEventFeedbackInput
  },
  output: {
    shape: UpdateAuthEventFeedbackOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserPoolAddOnNotEnabledException
    },
    {
      shape: InternalErrorException
    }
  ]
};

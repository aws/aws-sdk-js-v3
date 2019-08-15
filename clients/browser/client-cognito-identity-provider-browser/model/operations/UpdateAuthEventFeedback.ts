import { UpdateAuthEventFeedbackInput } from "../shapes/UpdateAuthEventFeedbackInput";
import { UpdateAuthEventFeedbackOutput } from "../shapes/UpdateAuthEventFeedbackOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "../shapes/UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

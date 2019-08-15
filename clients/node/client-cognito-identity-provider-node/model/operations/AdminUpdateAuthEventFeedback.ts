import { AdminUpdateAuthEventFeedbackInput } from "../shapes/AdminUpdateAuthEventFeedbackInput";
import { AdminUpdateAuthEventFeedbackOutput } from "../shapes/AdminUpdateAuthEventFeedbackOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "../shapes/UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminUpdateAuthEventFeedback: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminUpdateAuthEventFeedback",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminUpdateAuthEventFeedbackInput
  },
  output: {
    shape: AdminUpdateAuthEventFeedbackOutput
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

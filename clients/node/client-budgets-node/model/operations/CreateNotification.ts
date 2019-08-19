import { CreateNotificationInput } from "../shapes/CreateNotificationInput";
import { CreateNotificationOutput } from "../shapes/CreateNotificationOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { CreationLimitExceededException } from "../shapes/CreationLimitExceededException";
import { DuplicateRecordException } from "../shapes/DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNotificationInput
  },
  output: {
    shape: CreateNotificationOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: CreationLimitExceededException
    },
    {
      shape: DuplicateRecordException
    }
  ]
};

import { CreateNotificationInput } from "./CreateNotificationInput";
import { CreateNotificationOutput } from "./CreateNotificationOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

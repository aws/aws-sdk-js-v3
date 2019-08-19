import { UpdateNotificationInput } from "../shapes/UpdateNotificationInput";
import { UpdateNotificationOutput } from "../shapes/UpdateNotificationOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { DuplicateRecordException } from "../shapes/DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNotificationInput
  },
  output: {
    shape: UpdateNotificationOutput
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
      shape: DuplicateRecordException
    }
  ]
};

import { UpdateNotificationInput } from "./UpdateNotificationInput";
import { UpdateNotificationOutput } from "./UpdateNotificationOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

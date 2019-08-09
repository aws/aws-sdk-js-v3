import { DeleteNotificationInput } from "./DeleteNotificationInput";
import { DeleteNotificationOutput } from "./DeleteNotificationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNotificationInput
  },
  output: {
    shape: DeleteNotificationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: NotFoundException
    }
  ]
};

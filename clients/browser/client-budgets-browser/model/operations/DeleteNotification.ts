import { DeleteNotificationInput } from "../shapes/DeleteNotificationInput";
import { DeleteNotificationOutput } from "../shapes/DeleteNotificationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

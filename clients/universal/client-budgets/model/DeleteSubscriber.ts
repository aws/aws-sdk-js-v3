import { DeleteSubscriberInput } from "./DeleteSubscriberInput";
import { DeleteSubscriberOutput } from "./DeleteSubscriberOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSubscriber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubscriber",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSubscriberInput
  },
  output: {
    shape: DeleteSubscriberOutput
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
    }
  ]
};

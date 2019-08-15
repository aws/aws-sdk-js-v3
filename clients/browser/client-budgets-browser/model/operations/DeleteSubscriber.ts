import { DeleteSubscriberInput } from "../shapes/DeleteSubscriberInput";
import { DeleteSubscriberOutput } from "../shapes/DeleteSubscriberOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

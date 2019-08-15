import { UpdateSubscriberInput } from "../shapes/UpdateSubscriberInput";
import { UpdateSubscriberOutput } from "../shapes/UpdateSubscriberOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { DuplicateRecordException } from "../shapes/DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSubscriber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSubscriber",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSubscriberInput
  },
  output: {
    shape: UpdateSubscriberOutput
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

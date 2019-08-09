import { UpdateSubscriberInput } from "./UpdateSubscriberInput";
import { UpdateSubscriberOutput } from "./UpdateSubscriberOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

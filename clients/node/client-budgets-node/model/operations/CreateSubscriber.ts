import { CreateSubscriberInput } from "../shapes/CreateSubscriberInput";
import { CreateSubscriberOutput } from "../shapes/CreateSubscriberOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { CreationLimitExceededException } from "../shapes/CreationLimitExceededException";
import { DuplicateRecordException } from "../shapes/DuplicateRecordException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSubscriber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubscriber",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSubscriberInput
  },
  output: {
    shape: CreateSubscriberOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: CreationLimitExceededException
    },
    {
      shape: DuplicateRecordException
    },
    {
      shape: NotFoundException
    }
  ]
};

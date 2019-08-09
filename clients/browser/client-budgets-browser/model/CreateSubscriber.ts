import { CreateSubscriberInput } from "./CreateSubscriberInput";
import { CreateSubscriberOutput } from "./CreateSubscriberOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

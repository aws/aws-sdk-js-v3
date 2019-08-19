import { CreateConfigurationSetInput } from "../shapes/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "../shapes/CreateConfigurationSetOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSet",
  http: {
    method: "POST",
    requestUri: "/v1/email/configuration-sets"
  },
  input: {
    shape: CreateConfigurationSetInput
  },
  output: {
    shape: CreateConfigurationSetOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};

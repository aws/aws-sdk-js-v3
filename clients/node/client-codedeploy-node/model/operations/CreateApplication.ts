import { CreateApplicationInput } from "../shapes/CreateApplicationInput";
import { CreateApplicationOutput } from "../shapes/CreateApplicationOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "../shapes/ApplicationAlreadyExistsException";
import { ApplicationLimitExceededException } from "../shapes/ApplicationLimitExceededException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { InvalidTagsToAddException } from "../shapes/InvalidTagsToAddException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationInput
  },
  output: {
    shape: CreateApplicationOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationAlreadyExistsException
    },
    {
      shape: ApplicationLimitExceededException
    },
    {
      shape: InvalidComputePlatformException
    },
    {
      shape: InvalidTagsToAddException
    }
  ]
};

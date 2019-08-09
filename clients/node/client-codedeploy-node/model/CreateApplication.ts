import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "./ApplicationAlreadyExistsException";
import { ApplicationLimitExceededException } from "./ApplicationLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { InvalidTagsToAddException } from "./InvalidTagsToAddException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { CreateConfigurationSetInput } from "../shapes/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "../shapes/CreateConfigurationSetOutput";
import { ConfigurationSetAlreadyExistsException } from "../shapes/ConfigurationSetAlreadyExistsException";
import { InvalidConfigurationSetException } from "../shapes/InvalidConfigurationSetException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConfigurationSetInput
  },
  output: {
    shape: CreateConfigurationSetOutput,
    resultWrapper: "CreateConfigurationSetResult"
  },
  errors: [
    {
      shape: ConfigurationSetAlreadyExistsException
    },
    {
      shape: InvalidConfigurationSetException
    },
    {
      shape: LimitExceededException
    }
  ]
};

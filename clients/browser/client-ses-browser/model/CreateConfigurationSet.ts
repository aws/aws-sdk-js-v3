import { CreateConfigurationSetInput } from "./CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "./CreateConfigurationSetOutput";
import { ConfigurationSetAlreadyExistsException } from "./ConfigurationSetAlreadyExistsException";
import { InvalidConfigurationSetException } from "./InvalidConfigurationSetException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { CreateSecurityConfigurationInput } from "./CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "./CreateSecurityConfigurationOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSecurityConfigurationInput
  },
  output: {
    shape: CreateSecurityConfigurationOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    }
  ]
};

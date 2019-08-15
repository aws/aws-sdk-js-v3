import { UpdateElasticsearchDomainConfigInput } from "../shapes/UpdateElasticsearchDomainConfigInput";
import { UpdateElasticsearchDomainConfigOutput } from "../shapes/UpdateElasticsearchDomainConfigOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateElasticsearchDomainConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateElasticsearchDomainConfig",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/domain/{DomainName}/config"
  },
  input: {
    shape: UpdateElasticsearchDomainConfigInput
  },
  output: {
    shape: UpdateElasticsearchDomainConfigOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};

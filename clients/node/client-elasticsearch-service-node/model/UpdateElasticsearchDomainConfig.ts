import { UpdateElasticsearchDomainConfigInput } from "./UpdateElasticsearchDomainConfigInput";
import { UpdateElasticsearchDomainConfigOutput } from "./UpdateElasticsearchDomainConfigOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

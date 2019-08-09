import { CreateElasticsearchDomainInput } from "./CreateElasticsearchDomainInput";
import { CreateElasticsearchDomainOutput } from "./CreateElasticsearchDomainOutput";
import { BaseException } from "./BaseException";
import { DisabledOperationException } from "./DisabledOperationException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateElasticsearchDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateElasticsearchDomain",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/domain"
  },
  input: {
    shape: CreateElasticsearchDomainInput
  },
  output: {
    shape: CreateElasticsearchDomainOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: DisabledOperationException
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
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ValidationException
    }
  ]
};

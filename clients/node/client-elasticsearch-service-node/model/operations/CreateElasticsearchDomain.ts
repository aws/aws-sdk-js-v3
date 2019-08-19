import { CreateElasticsearchDomainInput } from "../shapes/CreateElasticsearchDomainInput";
import { CreateElasticsearchDomainOutput } from "../shapes/CreateElasticsearchDomainOutput";
import { BaseException } from "../shapes/BaseException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

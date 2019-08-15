import { DeleteElasticsearchDomainInput } from "../shapes/DeleteElasticsearchDomainInput";
import { DeleteElasticsearchDomainOutput } from "../shapes/DeleteElasticsearchDomainOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteElasticsearchDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteElasticsearchDomain",
  http: {
    method: "DELETE",
    requestUri: "/2015-01-01/es/domain/{DomainName}"
  },
  input: {
    shape: DeleteElasticsearchDomainInput
  },
  output: {
    shape: DeleteElasticsearchDomainOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};

import { DeleteElasticsearchDomainInput } from "./DeleteElasticsearchDomainInput";
import { DeleteElasticsearchDomainOutput } from "./DeleteElasticsearchDomainOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

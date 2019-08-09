import { ListElasticsearchInstanceTypesInput } from "./ListElasticsearchInstanceTypesInput";
import { ListElasticsearchInstanceTypesOutput } from "./ListElasticsearchInstanceTypesOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListElasticsearchInstanceTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListElasticsearchInstanceTypes",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}"
  },
  input: {
    shape: ListElasticsearchInstanceTypesInput
  },
  output: {
    shape: ListElasticsearchInstanceTypesOutput
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

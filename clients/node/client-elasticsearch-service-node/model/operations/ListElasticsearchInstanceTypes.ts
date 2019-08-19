import { ListElasticsearchInstanceTypesInput } from "../shapes/ListElasticsearchInstanceTypesInput";
import { ListElasticsearchInstanceTypesOutput } from "../shapes/ListElasticsearchInstanceTypesOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

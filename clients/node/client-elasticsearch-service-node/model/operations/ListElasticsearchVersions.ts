import { ListElasticsearchVersionsInput } from "../shapes/ListElasticsearchVersionsInput";
import { ListElasticsearchVersionsOutput } from "../shapes/ListElasticsearchVersionsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListElasticsearchVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListElasticsearchVersions",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/versions"
  },
  input: {
    shape: ListElasticsearchVersionsInput
  },
  output: {
    shape: ListElasticsearchVersionsOutput
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

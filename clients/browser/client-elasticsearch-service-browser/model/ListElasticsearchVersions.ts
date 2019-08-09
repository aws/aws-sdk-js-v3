import { ListElasticsearchVersionsInput } from "./ListElasticsearchVersionsInput";
import { ListElasticsearchVersionsOutput } from "./ListElasticsearchVersionsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { GetCompatibleElasticsearchVersionsInput } from "./GetCompatibleElasticsearchVersionsInput";
import { GetCompatibleElasticsearchVersionsOutput } from "./GetCompatibleElasticsearchVersionsOutput";
import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCompatibleElasticsearchVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCompatibleElasticsearchVersions",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/compatibleVersions"
  },
  input: {
    shape: GetCompatibleElasticsearchVersionsInput
  },
  output: {
    shape: GetCompatibleElasticsearchVersionsOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DisabledOperationException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalException
    }
  ]
};

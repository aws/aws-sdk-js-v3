import { GetCompatibleElasticsearchVersionsInput } from "../shapes/GetCompatibleElasticsearchVersionsInput";
import { GetCompatibleElasticsearchVersionsOutput } from "../shapes/GetCompatibleElasticsearchVersionsOutput";
import { BaseException } from "../shapes/BaseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

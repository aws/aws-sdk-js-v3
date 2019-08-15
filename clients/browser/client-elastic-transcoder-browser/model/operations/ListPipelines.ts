import { ListPipelinesInput } from "../shapes/ListPipelinesInput";
import { ListPipelinesOutput } from "../shapes/ListPipelinesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPipelines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPipelines",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/pipelines"
  },
  input: {
    shape: ListPipelinesInput
  },
  output: {
    shape: ListPipelinesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};

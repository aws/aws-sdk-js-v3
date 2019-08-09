import { ListPipelinesInput } from "./ListPipelinesInput";
import { ListPipelinesOutput } from "./ListPipelinesOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

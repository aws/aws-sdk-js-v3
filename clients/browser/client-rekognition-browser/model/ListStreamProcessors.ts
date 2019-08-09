import { ListStreamProcessorsInput } from "./ListStreamProcessorsInput";
import { ListStreamProcessorsOutput } from "./ListStreamProcessorsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListStreamProcessors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreamProcessors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStreamProcessorsInput
  },
  output: {
    shape: ListStreamProcessorsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPaginationTokenException
    },
    {
      shape: ProvisionedThroughputExceededException
    }
  ]
};

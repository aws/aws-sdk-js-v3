import { ListStreamProcessorsInput } from "../shapes/ListStreamProcessorsInput";
import { ListStreamProcessorsOutput } from "../shapes/ListStreamProcessorsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

import { DeleteCollectionInput } from "../shapes/DeleteCollectionInput";
import { DeleteCollectionOutput } from "../shapes/DeleteCollectionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCollection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCollection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCollectionInput
  },
  output: {
    shape: DeleteCollectionOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
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
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

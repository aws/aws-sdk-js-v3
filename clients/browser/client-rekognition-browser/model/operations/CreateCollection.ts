import { CreateCollectionInput } from "../shapes/CreateCollectionInput";
import { CreateCollectionOutput } from "../shapes/CreateCollectionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCollection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCollection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCollectionInput
  },
  output: {
    shape: CreateCollectionOutput
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
      shape: ResourceAlreadyExistsException
    }
  ]
};

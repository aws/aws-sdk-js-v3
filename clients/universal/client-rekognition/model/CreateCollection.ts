import { CreateCollectionInput } from "./CreateCollectionInput";
import { CreateCollectionOutput } from "./CreateCollectionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

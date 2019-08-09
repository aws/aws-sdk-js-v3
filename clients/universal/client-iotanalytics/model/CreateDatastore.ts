import { CreateDatastoreInput } from "./CreateDatastoreInput";
import { CreateDatastoreOutput } from "./CreateDatastoreOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDatastore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDatastore",
  http: {
    method: "POST",
    requestUri: "/datastores"
  },
  input: {
    shape: CreateDatastoreInput
  },
  output: {
    shape: CreateDatastoreOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    }
  ]
};

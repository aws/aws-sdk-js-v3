import { CreateDatastoreInput } from "../shapes/CreateDatastoreInput";
import { CreateDatastoreOutput } from "../shapes/CreateDatastoreOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

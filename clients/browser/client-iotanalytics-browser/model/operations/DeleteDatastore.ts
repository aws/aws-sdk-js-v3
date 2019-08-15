import { DeleteDatastoreInput } from "../shapes/DeleteDatastoreInput";
import { DeleteDatastoreOutput } from "../shapes/DeleteDatastoreOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDatastore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDatastore",
  http: {
    method: "DELETE",
    requestUri: "/datastores/{datastoreName}"
  },
  input: {
    shape: DeleteDatastoreInput
  },
  output: {
    shape: DeleteDatastoreOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};

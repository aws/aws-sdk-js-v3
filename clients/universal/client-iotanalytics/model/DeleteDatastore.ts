import { DeleteDatastoreInput } from "./DeleteDatastoreInput";
import { DeleteDatastoreOutput } from "./DeleteDatastoreOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

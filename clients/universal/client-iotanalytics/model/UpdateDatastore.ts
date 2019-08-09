import { UpdateDatastoreInput } from "./UpdateDatastoreInput";
import { UpdateDatastoreOutput } from "./UpdateDatastoreOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDatastore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDatastore",
  http: {
    method: "PUT",
    requestUri: "/datastores/{datastoreName}"
  },
  input: {
    shape: UpdateDatastoreInput
  },
  output: {
    shape: UpdateDatastoreOutput
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

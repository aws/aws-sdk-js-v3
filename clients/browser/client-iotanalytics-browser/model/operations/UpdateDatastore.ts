import { UpdateDatastoreInput } from "../shapes/UpdateDatastoreInput";
import { UpdateDatastoreOutput } from "../shapes/UpdateDatastoreOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

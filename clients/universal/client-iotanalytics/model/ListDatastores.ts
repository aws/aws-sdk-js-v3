import { ListDatastoresInput } from "./ListDatastoresInput";
import { ListDatastoresOutput } from "./ListDatastoresOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDatastores: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatastores",
  http: {
    method: "GET",
    requestUri: "/datastores"
  },
  input: {
    shape: ListDatastoresInput
  },
  output: {
    shape: ListDatastoresOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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

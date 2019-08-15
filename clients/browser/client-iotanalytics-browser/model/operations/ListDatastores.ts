import { ListDatastoresInput } from "../shapes/ListDatastoresInput";
import { ListDatastoresOutput } from "../shapes/ListDatastoresOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

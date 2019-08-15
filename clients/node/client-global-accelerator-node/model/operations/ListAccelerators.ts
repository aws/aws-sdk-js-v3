import { ListAcceleratorsInput } from "../shapes/ListAcceleratorsInput";
import { ListAcceleratorsOutput } from "../shapes/ListAcceleratorsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccelerators: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccelerators",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAcceleratorsInput
  },
  output: {
    shape: ListAcceleratorsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};

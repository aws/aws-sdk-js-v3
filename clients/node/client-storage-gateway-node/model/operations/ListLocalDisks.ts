import { ListLocalDisksInput } from "../shapes/ListLocalDisksInput";
import { ListLocalDisksOutput } from "../shapes/ListLocalDisksOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLocalDisks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLocalDisks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLocalDisksInput
  },
  output: {
    shape: ListLocalDisksOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};

import { ListLocalDisksInput } from "./ListLocalDisksInput";
import { ListLocalDisksOutput } from "./ListLocalDisksOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { CancelArchivalInput } from "../shapes/CancelArchivalInput";
import { CancelArchivalOutput } from "../shapes/CancelArchivalOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelArchival: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelArchival",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelArchivalInput
  },
  output: {
    shape: CancelArchivalOutput
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

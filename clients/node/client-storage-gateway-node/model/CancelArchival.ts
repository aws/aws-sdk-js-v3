import { CancelArchivalInput } from "./CancelArchivalInput";
import { CancelArchivalOutput } from "./CancelArchivalOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { DeleteTapeInput } from "./DeleteTapeInput";
import { DeleteTapeOutput } from "./DeleteTapeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTape: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTape",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTapeInput
  },
  output: {
    shape: DeleteTapeOutput
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

import { DeleteTapeInput } from "../shapes/DeleteTapeInput";
import { DeleteTapeOutput } from "../shapes/DeleteTapeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

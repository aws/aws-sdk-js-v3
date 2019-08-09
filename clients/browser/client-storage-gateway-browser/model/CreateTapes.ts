import { CreateTapesInput } from "./CreateTapesInput";
import { CreateTapesOutput } from "./CreateTapesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTapes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTapes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTapesInput
  },
  output: {
    shape: CreateTapesOutput
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

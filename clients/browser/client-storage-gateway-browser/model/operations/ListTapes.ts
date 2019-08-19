import { ListTapesInput } from "../shapes/ListTapesInput";
import { ListTapesOutput } from "../shapes/ListTapesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTapes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTapes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTapesInput
  },
  output: {
    shape: ListTapesOutput
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

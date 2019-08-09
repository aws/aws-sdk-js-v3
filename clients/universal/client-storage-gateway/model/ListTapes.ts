import { ListTapesInput } from "./ListTapesInput";
import { ListTapesOutput } from "./ListTapesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

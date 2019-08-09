import { DescribeTapesInput } from "./DescribeTapesInput";
import { DescribeTapesOutput } from "./DescribeTapesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTapes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTapes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTapesInput
  },
  output: {
    shape: DescribeTapesOutput
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

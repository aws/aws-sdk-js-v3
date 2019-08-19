import { DescribeTapesInput } from "../shapes/DescribeTapesInput";
import { DescribeTapesOutput } from "../shapes/DescribeTapesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

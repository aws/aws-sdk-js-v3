import { CancelRetrievalInput } from "../shapes/CancelRetrievalInput";
import { CancelRetrievalOutput } from "../shapes/CancelRetrievalOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelRetrieval: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelRetrieval",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelRetrievalInput
  },
  output: {
    shape: CancelRetrievalOutput
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

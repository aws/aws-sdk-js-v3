import { CancelRetrievalInput } from "./CancelRetrievalInput";
import { CancelRetrievalOutput } from "./CancelRetrievalOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

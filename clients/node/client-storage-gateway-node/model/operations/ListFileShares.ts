import { ListFileSharesInput } from "../shapes/ListFileSharesInput";
import { ListFileSharesOutput } from "../shapes/ListFileSharesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFileShares: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFileShares",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListFileSharesInput
  },
  output: {
    shape: ListFileSharesOutput
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

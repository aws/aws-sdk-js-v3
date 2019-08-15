import { GetDataflowGraphInput } from "../shapes/GetDataflowGraphInput";
import { GetDataflowGraphOutput } from "../shapes/GetDataflowGraphOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDataflowGraph: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataflowGraph",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDataflowGraphInput
  },
  output: {
    shape: GetDataflowGraphOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};

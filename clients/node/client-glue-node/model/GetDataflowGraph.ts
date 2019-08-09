import { GetDataflowGraphInput } from "./GetDataflowGraphInput";
import { GetDataflowGraphOutput } from "./GetDataflowGraphOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

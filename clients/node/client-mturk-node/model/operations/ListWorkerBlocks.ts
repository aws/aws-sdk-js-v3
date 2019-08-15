import { ListWorkerBlocksInput } from "../shapes/ListWorkerBlocksInput";
import { ListWorkerBlocksOutput } from "../shapes/ListWorkerBlocksOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWorkerBlocks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkerBlocks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkerBlocksInput
  },
  output: {
    shape: ListWorkerBlocksOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};

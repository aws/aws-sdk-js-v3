import { ListWorkerBlocksInput } from "./ListWorkerBlocksInput";
import { ListWorkerBlocksOutput } from "./ListWorkerBlocksOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

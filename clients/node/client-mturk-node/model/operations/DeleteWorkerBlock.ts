import { DeleteWorkerBlockInput } from "../shapes/DeleteWorkerBlockInput";
import { DeleteWorkerBlockOutput } from "../shapes/DeleteWorkerBlockOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteWorkerBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWorkerBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWorkerBlockInput
  },
  output: {
    shape: DeleteWorkerBlockOutput
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

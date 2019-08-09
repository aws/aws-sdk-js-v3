import { DeleteWorkerBlockInput } from "./DeleteWorkerBlockInput";
import { DeleteWorkerBlockOutput } from "./DeleteWorkerBlockOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

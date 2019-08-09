import { CreateWorkerBlockInput } from "./CreateWorkerBlockInput";
import { CreateWorkerBlockOutput } from "./CreateWorkerBlockOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateWorkerBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWorkerBlock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWorkerBlockInput
  },
  output: {
    shape: CreateWorkerBlockOutput
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

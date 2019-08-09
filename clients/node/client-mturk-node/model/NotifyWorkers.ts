import { NotifyWorkersInput } from "./NotifyWorkersInput";
import { NotifyWorkersOutput } from "./NotifyWorkersOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const NotifyWorkers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "NotifyWorkers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: NotifyWorkersInput
  },
  output: {
    shape: NotifyWorkersOutput
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

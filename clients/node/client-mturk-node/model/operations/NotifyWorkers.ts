import { NotifyWorkersInput } from "../shapes/NotifyWorkersInput";
import { NotifyWorkersOutput } from "../shapes/NotifyWorkersOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

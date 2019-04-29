import { DeleteQueueInput } from "./DeleteQueueInput";
import { DeleteQueueOutput } from "./DeleteQueueOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteQueueInput
  },
  output: {
    shape: DeleteQueueOutput
  },
  errors: []
};

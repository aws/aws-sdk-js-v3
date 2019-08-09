import { DeleteQueryLoggingConfigInput } from "./DeleteQueryLoggingConfigInput";
import { DeleteQueryLoggingConfigOutput } from "./DeleteQueryLoggingConfigOutput";
import { ConcurrentModification } from "./ConcurrentModification";
import { NoSuchQueryLoggingConfig } from "./NoSuchQueryLoggingConfig";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteQueryLoggingConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteQueryLoggingConfig",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/queryloggingconfig/{Id}"
  },
  input: {
    shape: DeleteQueryLoggingConfigInput
  },
  output: {
    shape: DeleteQueryLoggingConfigOutput
  },
  errors: [
    {
      shape: ConcurrentModification
    },
    {
      shape: NoSuchQueryLoggingConfig
    },
    {
      shape: InvalidInput
    }
  ]
};

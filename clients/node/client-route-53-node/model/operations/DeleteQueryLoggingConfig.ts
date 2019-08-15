import { DeleteQueryLoggingConfigInput } from "../shapes/DeleteQueryLoggingConfigInput";
import { DeleteQueryLoggingConfigOutput } from "../shapes/DeleteQueryLoggingConfigOutput";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { NoSuchQueryLoggingConfig } from "../shapes/NoSuchQueryLoggingConfig";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

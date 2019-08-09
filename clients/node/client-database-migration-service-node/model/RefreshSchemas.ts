import { RefreshSchemasInput } from "./RefreshSchemasInput";
import { RefreshSchemasOutput } from "./RefreshSchemasOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RefreshSchemas: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RefreshSchemas",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RefreshSchemasInput
  },
  output: {
    shape: RefreshSchemasOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: ResourceQuotaExceededFault
    }
  ]
};

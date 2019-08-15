import { RefreshSchemasInput } from "../shapes/RefreshSchemasInput";
import { RefreshSchemasOutput } from "../shapes/RefreshSchemasOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

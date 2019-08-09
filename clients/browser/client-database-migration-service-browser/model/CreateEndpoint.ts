import { CreateEndpointInput } from "./CreateEndpointInput";
import { CreateEndpointOutput } from "./CreateEndpointOutput";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEndpointInput
  },
  output: {
    shape: CreateEndpointOutput
  },
  errors: [
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: AccessDeniedFault
    }
  ]
};

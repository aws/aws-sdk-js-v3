import { CreateEndpointInput } from "../shapes/CreateEndpointInput";
import { CreateEndpointOutput } from "../shapes/CreateEndpointOutput";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

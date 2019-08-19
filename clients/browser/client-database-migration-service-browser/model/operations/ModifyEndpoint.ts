import { ModifyEndpointInput } from "../shapes/ModifyEndpointInput";
import { ModifyEndpointOutput } from "../shapes/ModifyEndpointOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyEndpointInput
  },
  output: {
    shape: ModifyEndpointOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: AccessDeniedFault
    }
  ]
};

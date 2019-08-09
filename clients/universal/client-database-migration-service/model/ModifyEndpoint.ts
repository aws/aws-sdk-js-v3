import { ModifyEndpointInput } from "./ModifyEndpointInput";
import { ModifyEndpointOutput } from "./ModifyEndpointOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

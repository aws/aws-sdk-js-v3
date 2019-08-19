import { TestConnectionInput } from "../shapes/TestConnectionInput";
import { TestConnectionOutput } from "../shapes/TestConnectionOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestConnectionInput
  },
  output: {
    shape: TestConnectionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: ResourceQuotaExceededFault
    }
  ]
};

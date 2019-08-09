import { TestConnectionInput } from "./TestConnectionInput";
import { TestConnectionOutput } from "./TestConnectionOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { ReloadTablesInput } from "./ReloadTablesInput";
import { ReloadTablesOutput } from "./ReloadTablesOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ReloadTables: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReloadTables",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReloadTablesInput
  },
  output: {
    shape: ReloadTablesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};

import { ReloadTablesInput } from "../shapes/ReloadTablesInput";
import { ReloadTablesOutput } from "../shapes/ReloadTablesOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

import { UpdateGlobalTableInput } from "../shapes/UpdateGlobalTableInput";
import { UpdateGlobalTableOutput } from "../shapes/UpdateGlobalTableOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { GlobalTableNotFoundException } from "../shapes/GlobalTableNotFoundException";
import { ReplicaAlreadyExistsException } from "../shapes/ReplicaAlreadyExistsException";
import { ReplicaNotFoundException } from "../shapes/ReplicaNotFoundException";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGlobalTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGlobalTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGlobalTableInput
  },
  output: {
    shape: UpdateGlobalTableOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: GlobalTableNotFoundException
    },
    {
      shape: ReplicaAlreadyExistsException
    },
    {
      shape: ReplicaNotFoundException
    },
    {
      shape: TableNotFoundException
    }
  ]
};

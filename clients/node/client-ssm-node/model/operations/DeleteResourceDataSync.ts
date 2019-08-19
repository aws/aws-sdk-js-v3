import { DeleteResourceDataSyncInput } from "../shapes/DeleteResourceDataSyncInput";
import { DeleteResourceDataSyncOutput } from "../shapes/DeleteResourceDataSyncOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ResourceDataSyncNotFoundException } from "../shapes/ResourceDataSyncNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResourceDataSync: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResourceDataSync",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResourceDataSyncInput
  },
  output: {
    shape: DeleteResourceDataSyncOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ResourceDataSyncNotFoundException
    }
  ]
};

import { DeleteResourceDataSyncInput } from "./DeleteResourceDataSyncInput";
import { DeleteResourceDataSyncOutput } from "./DeleteResourceDataSyncOutput";
import { InternalServerError } from "./InternalServerError";
import { ResourceDataSyncNotFoundException } from "./ResourceDataSyncNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { ListResourceDataSyncInput } from "./ListResourceDataSyncInput";
import { ListResourceDataSyncOutput } from "./ListResourceDataSyncOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListResourceDataSync: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceDataSync",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceDataSyncInput
  },
  output: {
    shape: ListResourceDataSyncOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    }
  ]
};

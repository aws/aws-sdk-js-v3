import { ListResourceDataSyncInput } from "../shapes/ListResourceDataSyncInput";
import { ListResourceDataSyncOutput } from "../shapes/ListResourceDataSyncOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

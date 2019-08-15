import { GetConnectionStatusInput } from "../shapes/GetConnectionStatusInput";
import { GetConnectionStatusOutput } from "../shapes/GetConnectionStatusOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConnectionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnectionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConnectionStatusInput
  },
  output: {
    shape: GetConnectionStatusOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};

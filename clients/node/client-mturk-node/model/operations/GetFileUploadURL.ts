import { GetFileUploadURLInput } from "../shapes/GetFileUploadURLInput";
import { GetFileUploadURLOutput } from "../shapes/GetFileUploadURLOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFileUploadURL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFileUploadURL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFileUploadURLInput
  },
  output: {
    shape: GetFileUploadURLOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};

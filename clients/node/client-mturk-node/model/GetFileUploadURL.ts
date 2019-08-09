import { GetFileUploadURLInput } from "./GetFileUploadURLInput";
import { GetFileUploadURLOutput } from "./GetFileUploadURLOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

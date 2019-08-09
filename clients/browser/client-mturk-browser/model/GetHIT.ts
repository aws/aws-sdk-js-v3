import { GetHITInput } from "./GetHITInput";
import { GetHITOutput } from "./GetHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetHITInput
  },
  output: {
    shape: GetHITOutput
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

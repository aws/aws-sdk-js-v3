import { UpdateExpirationForHITInput } from "./UpdateExpirationForHITInput";
import { UpdateExpirationForHITOutput } from "./UpdateExpirationForHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateExpirationForHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateExpirationForHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateExpirationForHITInput
  },
  output: {
    shape: UpdateExpirationForHITOutput
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

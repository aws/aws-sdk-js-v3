import { UpdateExpirationForHITInput } from "../shapes/UpdateExpirationForHITInput";
import { UpdateExpirationForHITOutput } from "../shapes/UpdateExpirationForHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

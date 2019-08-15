import { DeleteHITInput } from "../shapes/DeleteHITInput";
import { DeleteHITOutput } from "../shapes/DeleteHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteHITInput
  },
  output: {
    shape: DeleteHITOutput
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

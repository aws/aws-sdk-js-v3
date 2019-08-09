import { DeleteHITInput } from "./DeleteHITInput";
import { DeleteHITOutput } from "./DeleteHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

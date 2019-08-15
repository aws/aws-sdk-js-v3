import { UpdateHITTypeOfHITInput } from "../shapes/UpdateHITTypeOfHITInput";
import { UpdateHITTypeOfHITOutput } from "../shapes/UpdateHITTypeOfHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateHITTypeOfHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateHITTypeOfHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateHITTypeOfHITInput
  },
  output: {
    shape: UpdateHITTypeOfHITOutput
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

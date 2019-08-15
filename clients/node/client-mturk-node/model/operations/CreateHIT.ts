import { CreateHITInput } from "../shapes/CreateHITInput";
import { CreateHITOutput } from "../shapes/CreateHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHITInput
  },
  output: {
    shape: CreateHITOutput
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

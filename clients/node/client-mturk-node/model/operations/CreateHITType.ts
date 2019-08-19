import { CreateHITTypeInput } from "../shapes/CreateHITTypeInput";
import { CreateHITTypeOutput } from "../shapes/CreateHITTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHITType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHITType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHITTypeInput
  },
  output: {
    shape: CreateHITTypeOutput
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

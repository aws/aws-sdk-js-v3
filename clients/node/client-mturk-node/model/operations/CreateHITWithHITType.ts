import { CreateHITWithHITTypeInput } from "../shapes/CreateHITWithHITTypeInput";
import { CreateHITWithHITTypeOutput } from "../shapes/CreateHITWithHITTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHITWithHITType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHITWithHITType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHITWithHITTypeInput
  },
  output: {
    shape: CreateHITWithHITTypeOutput
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

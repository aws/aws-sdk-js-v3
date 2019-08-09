import { CreateHITInput } from "./CreateHITInput";
import { CreateHITOutput } from "./CreateHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

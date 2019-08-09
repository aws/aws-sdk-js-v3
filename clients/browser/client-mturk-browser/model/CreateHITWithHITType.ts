import { CreateHITWithHITTypeInput } from "./CreateHITWithHITTypeInput";
import { CreateHITWithHITTypeOutput } from "./CreateHITWithHITTypeOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

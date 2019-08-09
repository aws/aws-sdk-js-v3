import { CreateQualificationTypeInput } from "./CreateQualificationTypeInput";
import { CreateQualificationTypeOutput } from "./CreateQualificationTypeOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateQualificationTypeInput
  },
  output: {
    shape: CreateQualificationTypeOutput
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

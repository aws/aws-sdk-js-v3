import { CreateQualificationTypeInput } from "../shapes/CreateQualificationTypeInput";
import { CreateQualificationTypeOutput } from "../shapes/CreateQualificationTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

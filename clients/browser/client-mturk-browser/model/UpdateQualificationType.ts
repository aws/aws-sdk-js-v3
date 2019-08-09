import { UpdateQualificationTypeInput } from "./UpdateQualificationTypeInput";
import { UpdateQualificationTypeOutput } from "./UpdateQualificationTypeOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateQualificationTypeInput
  },
  output: {
    shape: UpdateQualificationTypeOutput
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

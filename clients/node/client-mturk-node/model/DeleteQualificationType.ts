import { DeleteQualificationTypeInput } from "./DeleteQualificationTypeInput";
import { DeleteQualificationTypeOutput } from "./DeleteQualificationTypeOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteQualificationTypeInput
  },
  output: {
    shape: DeleteQualificationTypeOutput
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

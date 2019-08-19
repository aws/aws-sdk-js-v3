import { DeleteQualificationTypeInput } from "../shapes/DeleteQualificationTypeInput";
import { DeleteQualificationTypeOutput } from "../shapes/DeleteQualificationTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

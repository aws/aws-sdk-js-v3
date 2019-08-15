import { GetQualificationTypeInput } from "../shapes/GetQualificationTypeInput";
import { GetQualificationTypeOutput } from "../shapes/GetQualificationTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQualificationTypeInput
  },
  output: {
    shape: GetQualificationTypeOutput
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

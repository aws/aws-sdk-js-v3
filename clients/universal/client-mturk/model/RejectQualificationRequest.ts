import { RejectQualificationRequestInput } from "./RejectQualificationRequestInput";
import { RejectQualificationRequestOutput } from "./RejectQualificationRequestOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectQualificationRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectQualificationRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectQualificationRequestInput
  },
  output: {
    shape: RejectQualificationRequestOutput
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

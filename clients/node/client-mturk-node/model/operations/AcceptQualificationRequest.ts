import { AcceptQualificationRequestInput } from "../shapes/AcceptQualificationRequestInput";
import { AcceptQualificationRequestOutput } from "../shapes/AcceptQualificationRequestOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptQualificationRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptQualificationRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptQualificationRequestInput
  },
  output: {
    shape: AcceptQualificationRequestOutput
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

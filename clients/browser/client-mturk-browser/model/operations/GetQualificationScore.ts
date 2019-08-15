import { GetQualificationScoreInput } from "../shapes/GetQualificationScoreInput";
import { GetQualificationScoreOutput } from "../shapes/GetQualificationScoreOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetQualificationScore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQualificationScore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQualificationScoreInput
  },
  output: {
    shape: GetQualificationScoreOutput
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

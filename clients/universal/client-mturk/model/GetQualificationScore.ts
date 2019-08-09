import { GetQualificationScoreInput } from "./GetQualificationScoreInput";
import { GetQualificationScoreOutput } from "./GetQualificationScoreOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

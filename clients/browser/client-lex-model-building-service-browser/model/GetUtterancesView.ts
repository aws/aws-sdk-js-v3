import { GetUtterancesViewInput } from "./GetUtterancesViewInput";
import { GetUtterancesViewOutput } from "./GetUtterancesViewOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUtterancesView: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUtterancesView",
  http: {
    method: "GET",
    requestUri: "/bots/{botname}/utterances?view=aggregation"
  },
  input: {
    shape: GetUtterancesViewInput
  },
  output: {
    shape: GetUtterancesViewOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};

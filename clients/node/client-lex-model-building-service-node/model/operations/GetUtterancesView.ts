import { GetUtterancesViewInput } from "../shapes/GetUtterancesViewInput";
import { GetUtterancesViewOutput } from "../shapes/GetUtterancesViewOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

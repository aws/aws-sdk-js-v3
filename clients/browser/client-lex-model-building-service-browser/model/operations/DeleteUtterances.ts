import { DeleteUtterancesInput } from "../shapes/DeleteUtterancesInput";
import { DeleteUtterancesOutput } from "../shapes/DeleteUtterancesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUtterances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUtterances",
  http: {
    method: "DELETE",
    requestUri: "/bots/{botName}/utterances/{userId}"
  },
  input: {
    shape: DeleteUtterancesInput
  },
  output: {
    shape: DeleteUtterancesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
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

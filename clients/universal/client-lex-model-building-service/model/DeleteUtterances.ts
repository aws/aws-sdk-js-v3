import { DeleteUtterancesInput } from "./DeleteUtterancesInput";
import { DeleteUtterancesOutput } from "./DeleteUtterancesOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

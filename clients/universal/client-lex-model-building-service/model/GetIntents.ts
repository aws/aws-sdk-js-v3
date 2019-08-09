import { GetIntentsInput } from "./GetIntentsInput";
import { GetIntentsOutput } from "./GetIntentsOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIntents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntents",
  http: {
    method: "GET",
    requestUri: "/intents/"
  },
  input: {
    shape: GetIntentsInput
  },
  output: {
    shape: GetIntentsOutput
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

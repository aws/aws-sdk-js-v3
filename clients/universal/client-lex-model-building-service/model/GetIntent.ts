import { GetIntentInput } from "./GetIntentInput";
import { GetIntentOutput } from "./GetIntentOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIntent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntent",
  http: {
    method: "GET",
    requestUri: "/intents/{name}/versions/{version}"
  },
  input: {
    shape: GetIntentInput
  },
  output: {
    shape: GetIntentOutput
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

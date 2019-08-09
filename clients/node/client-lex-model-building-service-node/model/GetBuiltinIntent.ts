import { GetBuiltinIntentInput } from "./GetBuiltinIntentInput";
import { GetBuiltinIntentOutput } from "./GetBuiltinIntentOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBuiltinIntent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBuiltinIntent",
  http: {
    method: "GET",
    requestUri: "/builtins/intents/{signature}"
  },
  input: {
    shape: GetBuiltinIntentInput
  },
  output: {
    shape: GetBuiltinIntentOutput
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

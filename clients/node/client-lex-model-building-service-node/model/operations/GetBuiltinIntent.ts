import { GetBuiltinIntentInput } from "../shapes/GetBuiltinIntentInput";
import { GetBuiltinIntentOutput } from "../shapes/GetBuiltinIntentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

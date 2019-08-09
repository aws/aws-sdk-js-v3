import { GetBuiltinIntentsInput } from "./GetBuiltinIntentsInput";
import { GetBuiltinIntentsOutput } from "./GetBuiltinIntentsOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBuiltinIntents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBuiltinIntents",
  http: {
    method: "GET",
    requestUri: "/builtins/intents/"
  },
  input: {
    shape: GetBuiltinIntentsInput
  },
  output: {
    shape: GetBuiltinIntentsOutput
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

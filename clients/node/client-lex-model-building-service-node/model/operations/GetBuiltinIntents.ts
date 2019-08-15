import { GetBuiltinIntentsInput } from "../shapes/GetBuiltinIntentsInput";
import { GetBuiltinIntentsOutput } from "../shapes/GetBuiltinIntentsOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

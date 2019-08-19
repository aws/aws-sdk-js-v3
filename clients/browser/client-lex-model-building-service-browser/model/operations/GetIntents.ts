import { GetIntentsInput } from "../shapes/GetIntentsInput";
import { GetIntentsOutput } from "../shapes/GetIntentsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

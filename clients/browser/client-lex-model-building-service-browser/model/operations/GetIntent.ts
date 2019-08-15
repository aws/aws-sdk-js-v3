import { GetIntentInput } from "../shapes/GetIntentInput";
import { GetIntentOutput } from "../shapes/GetIntentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

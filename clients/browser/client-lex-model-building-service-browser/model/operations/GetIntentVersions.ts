import { GetIntentVersionsInput } from "../shapes/GetIntentVersionsInput";
import { GetIntentVersionsOutput } from "../shapes/GetIntentVersionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIntentVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntentVersions",
  http: {
    method: "GET",
    requestUri: "/intents/{name}/versions/"
  },
  input: {
    shape: GetIntentVersionsInput
  },
  output: {
    shape: GetIntentVersionsOutput
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

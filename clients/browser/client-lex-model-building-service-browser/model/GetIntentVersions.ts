import { GetIntentVersionsInput } from "./GetIntentVersionsInput";
import { GetIntentVersionsOutput } from "./GetIntentVersionsOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

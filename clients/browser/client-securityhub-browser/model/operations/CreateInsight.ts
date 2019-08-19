import { CreateInsightInput } from "../shapes/CreateInsightInput";
import { CreateInsightOutput } from "../shapes/CreateInsightOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInsight: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInsight",
  http: {
    method: "POST",
    requestUri: "/insights"
  },
  input: {
    shape: CreateInsightInput
  },
  output: {
    shape: CreateInsightOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceConflictException
    }
  ]
};

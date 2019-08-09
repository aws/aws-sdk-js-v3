import { CreateInsightInput } from "./CreateInsightInput";
import { CreateInsightOutput } from "./CreateInsightOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { UpdateInsightInput } from "../shapes/UpdateInsightInput";
import { UpdateInsightOutput } from "../shapes/UpdateInsightOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateInsight: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInsight",
  http: {
    method: "PATCH",
    requestUri: "/insights/{InsightArn+}"
  },
  input: {
    shape: UpdateInsightInput
  },
  output: {
    shape: UpdateInsightOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

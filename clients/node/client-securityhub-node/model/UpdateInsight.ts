import { UpdateInsightInput } from "./UpdateInsightInput";
import { UpdateInsightOutput } from "./UpdateInsightOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

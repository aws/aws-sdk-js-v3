import { DeleteInsightInput } from "../shapes/DeleteInsightInput";
import { DeleteInsightOutput } from "../shapes/DeleteInsightOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInsight: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInsight",
  http: {
    method: "DELETE",
    requestUri: "/insights/{InsightArn+}"
  },
  input: {
    shape: DeleteInsightInput
  },
  output: {
    shape: DeleteInsightOutput
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

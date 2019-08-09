import { DeleteInsightInput } from "./DeleteInsightInput";
import { DeleteInsightOutput } from "./DeleteInsightOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

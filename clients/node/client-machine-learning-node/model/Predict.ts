import { PredictInput } from "./PredictInput";
import { PredictOutput } from "./PredictOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { PredictorNotMountedException } from "./PredictorNotMountedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const Predict: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Predict",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PredictInput
  },
  output: {
    shape: PredictOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerException
    },
    {
      shape: PredictorNotMountedException
    }
  ]
};

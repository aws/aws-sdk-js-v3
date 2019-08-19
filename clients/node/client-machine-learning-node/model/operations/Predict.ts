import { PredictInput } from "../shapes/PredictInput";
import { PredictOutput } from "../shapes/PredictOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { PredictorNotMountedException } from "../shapes/PredictorNotMountedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

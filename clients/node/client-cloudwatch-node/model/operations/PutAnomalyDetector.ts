import { PutAnomalyDetectorInput } from "../shapes/PutAnomalyDetectorInput";
import { PutAnomalyDetectorOutput } from "../shapes/PutAnomalyDetectorOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAnomalyDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAnomalyDetector",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAnomalyDetectorInput
  },
  output: {
    shape: PutAnomalyDetectorOutput,
    resultWrapper: "PutAnomalyDetectorResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingRequiredParameterException
    }
  ]
};

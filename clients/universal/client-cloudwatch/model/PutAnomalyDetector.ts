import { PutAnomalyDetectorInput } from "./PutAnomalyDetectorInput";
import { PutAnomalyDetectorOutput } from "./PutAnomalyDetectorOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

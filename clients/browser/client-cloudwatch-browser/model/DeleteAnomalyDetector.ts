import { DeleteAnomalyDetectorInput } from "./DeleteAnomalyDetectorInput";
import { DeleteAnomalyDetectorOutput } from "./DeleteAnomalyDetectorOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAnomalyDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAnomalyDetector",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAnomalyDetectorInput
  },
  output: {
    shape: DeleteAnomalyDetectorOutput,
    resultWrapper: "DeleteAnomalyDetectorResult"
  },
  errors: [
    {
      shape: ResourceNotFoundException
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

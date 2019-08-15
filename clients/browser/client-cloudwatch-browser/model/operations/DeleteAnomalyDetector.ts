import { DeleteAnomalyDetectorInput } from "../shapes/DeleteAnomalyDetectorInput";
import { DeleteAnomalyDetectorOutput } from "../shapes/DeleteAnomalyDetectorOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

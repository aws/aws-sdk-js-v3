import { PutMetricDataInput } from "../shapes/PutMetricDataInput";
import { PutMetricDataOutput } from "../shapes/PutMetricDataOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutMetricData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMetricData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutMetricDataInput
  },
  output: {
    shape: PutMetricDataOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: InternalServiceFault
    }
  ]
};

import { PutMetricDataInput } from "./PutMetricDataInput";
import { PutMetricDataOutput } from "./PutMetricDataOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InternalServiceFault } from "./InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { PutAggregationAuthorizationInput } from "../shapes/PutAggregationAuthorizationInput";
import { PutAggregationAuthorizationOutput } from "../shapes/PutAggregationAuthorizationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAggregationAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAggregationAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAggregationAuthorizationInput
  },
  output: {
    shape: PutAggregationAuthorizationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    }
  ]
};

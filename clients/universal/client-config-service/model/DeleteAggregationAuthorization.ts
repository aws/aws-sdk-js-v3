import { DeleteAggregationAuthorizationInput } from "./DeleteAggregationAuthorizationInput";
import { DeleteAggregationAuthorizationOutput } from "./DeleteAggregationAuthorizationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAggregationAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAggregationAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAggregationAuthorizationInput
  },
  output: {
    shape: DeleteAggregationAuthorizationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    }
  ]
};

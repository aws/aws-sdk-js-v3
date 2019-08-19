import { DeletePendingAggregationRequestInput } from "../shapes/DeletePendingAggregationRequestInput";
import { DeletePendingAggregationRequestOutput } from "../shapes/DeletePendingAggregationRequestOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePendingAggregationRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePendingAggregationRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePendingAggregationRequestInput
  },
  output: {
    shape: DeletePendingAggregationRequestOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    }
  ]
};

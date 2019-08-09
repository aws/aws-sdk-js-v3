import { DeletePendingAggregationRequestInput } from "./DeletePendingAggregationRequestInput";
import { DeletePendingAggregationRequestOutput } from "./DeletePendingAggregationRequestOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

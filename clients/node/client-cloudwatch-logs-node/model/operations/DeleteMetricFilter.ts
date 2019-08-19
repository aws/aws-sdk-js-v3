import { DeleteMetricFilterInput } from "../shapes/DeleteMetricFilterInput";
import { DeleteMetricFilterOutput } from "../shapes/DeleteMetricFilterOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMetricFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMetricFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMetricFilterInput
  },
  output: {
    shape: DeleteMetricFilterOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};

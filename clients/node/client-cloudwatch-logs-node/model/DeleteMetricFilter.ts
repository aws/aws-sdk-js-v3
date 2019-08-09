import { DeleteMetricFilterInput } from "./DeleteMetricFilterInput";
import { DeleteMetricFilterOutput } from "./DeleteMetricFilterOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

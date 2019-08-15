import { BatchDescribeSimulationJobInput } from "../shapes/BatchDescribeSimulationJobInput";
import { BatchDescribeSimulationJobOutput } from "../shapes/BatchDescribeSimulationJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDescribeSimulationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDescribeSimulationJob",
  http: {
    method: "POST",
    requestUri: "/batchDescribeSimulationJob"
  },
  input: {
    shape: BatchDescribeSimulationJobInput
  },
  output: {
    shape: BatchDescribeSimulationJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};

import { BatchDescribeSimulationJobInput } from "./BatchDescribeSimulationJobInput";
import { BatchDescribeSimulationJobOutput } from "./BatchDescribeSimulationJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

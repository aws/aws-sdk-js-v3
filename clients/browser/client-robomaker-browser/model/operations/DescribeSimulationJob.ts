import { DescribeSimulationJobInput } from "../shapes/DescribeSimulationJobInput";
import { DescribeSimulationJobOutput } from "../shapes/DescribeSimulationJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSimulationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSimulationJob",
  http: {
    method: "POST",
    requestUri: "/describeSimulationJob"
  },
  input: {
    shape: DescribeSimulationJobInput
  },
  output: {
    shape: DescribeSimulationJobOutput
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

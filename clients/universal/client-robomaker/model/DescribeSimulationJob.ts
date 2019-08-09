import { DescribeSimulationJobInput } from "./DescribeSimulationJobInput";
import { DescribeSimulationJobOutput } from "./DescribeSimulationJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

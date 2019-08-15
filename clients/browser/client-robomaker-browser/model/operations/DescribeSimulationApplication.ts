import { DescribeSimulationApplicationInput } from "../shapes/DescribeSimulationApplicationInput";
import { DescribeSimulationApplicationOutput } from "../shapes/DescribeSimulationApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSimulationApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSimulationApplication",
  http: {
    method: "POST",
    requestUri: "/describeSimulationApplication"
  },
  input: {
    shape: DescribeSimulationApplicationInput
  },
  output: {
    shape: DescribeSimulationApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};

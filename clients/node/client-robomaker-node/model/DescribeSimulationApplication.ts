import { DescribeSimulationApplicationInput } from "./DescribeSimulationApplicationInput";
import { DescribeSimulationApplicationOutput } from "./DescribeSimulationApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

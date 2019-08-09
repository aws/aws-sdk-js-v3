import { DescribeFleetInput } from "./DescribeFleetInput";
import { DescribeFleetOutput } from "./DescribeFleetOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleet",
  http: {
    method: "POST",
    requestUri: "/describeFleet"
  },
  input: {
    shape: DescribeFleetInput
  },
  output: {
    shape: DescribeFleetOutput
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

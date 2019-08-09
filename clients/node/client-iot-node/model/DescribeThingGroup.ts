import { DescribeThingGroupInput } from "./DescribeThingGroupInput";
import { DescribeThingGroupOutput } from "./DescribeThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeThingGroup",
  http: {
    method: "GET",
    requestUri: "/thing-groups/{thingGroupName}"
  },
  input: {
    shape: DescribeThingGroupInput
  },
  output: {
    shape: DescribeThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

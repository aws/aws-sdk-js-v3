import { DescribeTimeToLiveInput } from "../shapes/DescribeTimeToLiveInput";
import { DescribeTimeToLiveOutput } from "../shapes/DescribeTimeToLiveOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTimeToLive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTimeToLive",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTimeToLiveInput
  },
  output: {
    shape: DescribeTimeToLiveOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};

import { DescribeTimeToLiveInput } from "./DescribeTimeToLiveInput";
import { DescribeTimeToLiveOutput } from "./DescribeTimeToLiveOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

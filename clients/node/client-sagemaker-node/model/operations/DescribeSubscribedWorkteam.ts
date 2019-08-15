import { DescribeSubscribedWorkteamInput } from "../shapes/DescribeSubscribedWorkteamInput";
import { DescribeSubscribedWorkteamOutput } from "../shapes/DescribeSubscribedWorkteamOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSubscribedWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubscribedWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubscribedWorkteamInput
  },
  output: {
    shape: DescribeSubscribedWorkteamOutput
  },
  errors: []
};

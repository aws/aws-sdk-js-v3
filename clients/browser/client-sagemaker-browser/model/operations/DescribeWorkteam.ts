import { DescribeWorkteamInput } from "../shapes/DescribeWorkteamInput";
import { DescribeWorkteamOutput } from "../shapes/DescribeWorkteamOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkteamInput
  },
  output: {
    shape: DescribeWorkteamOutput
  },
  errors: []
};

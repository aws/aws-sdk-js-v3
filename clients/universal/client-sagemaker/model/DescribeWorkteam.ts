import { DescribeWorkteamInput } from "./DescribeWorkteamInput";
import { DescribeWorkteamOutput } from "./DescribeWorkteamOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

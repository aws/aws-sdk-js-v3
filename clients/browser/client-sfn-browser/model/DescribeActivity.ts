import { DescribeActivityInput } from "./DescribeActivityInput";
import { DescribeActivityOutput } from "./DescribeActivityOutput";
import { ActivityDoesNotExist } from "./ActivityDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeActivity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActivity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeActivityInput
  },
  output: {
    shape: DescribeActivityOutput
  },
  errors: [
    {
      shape: ActivityDoesNotExist
    },
    {
      shape: InvalidArn
    }
  ]
};

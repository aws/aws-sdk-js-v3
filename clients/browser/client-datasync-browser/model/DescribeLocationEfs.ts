import { DescribeLocationEfsInput } from "./DescribeLocationEfsInput";
import { DescribeLocationEfsOutput } from "./DescribeLocationEfsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLocationEfs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLocationEfs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLocationEfsInput
  },
  output: {
    shape: DescribeLocationEfsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};

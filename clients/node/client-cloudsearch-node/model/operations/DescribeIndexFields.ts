import { DescribeIndexFieldsInput } from "../shapes/DescribeIndexFieldsInput";
import { DescribeIndexFieldsOutput } from "../shapes/DescribeIndexFieldsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIndexFields: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIndexFields",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIndexFieldsInput
  },
  output: {
    shape: DescribeIndexFieldsOutput,
    resultWrapper: "DescribeIndexFieldsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

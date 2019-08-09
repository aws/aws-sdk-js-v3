import { DescribeIndexFieldsInput } from "./DescribeIndexFieldsInput";
import { DescribeIndexFieldsOutput } from "./DescribeIndexFieldsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { DescribeStorageInput } from "../shapes/DescribeStorageInput";
import { DescribeStorageOutput } from "../shapes/DescribeStorageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStorage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStorage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStorageInput
  },
  output: {
    shape: DescribeStorageOutput,
    resultWrapper: "DescribeStorageResult"
  },
  errors: []
};

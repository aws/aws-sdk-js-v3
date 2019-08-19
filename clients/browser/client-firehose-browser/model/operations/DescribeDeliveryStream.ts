import { DescribeDeliveryStreamInput } from "../shapes/DescribeDeliveryStreamInput";
import { DescribeDeliveryStreamOutput } from "../shapes/DescribeDeliveryStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDeliveryStreamInput
  },
  output: {
    shape: DescribeDeliveryStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};

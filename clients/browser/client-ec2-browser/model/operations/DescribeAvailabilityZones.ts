import { DescribeAvailabilityZonesInput } from "../shapes/DescribeAvailabilityZonesInput";
import { DescribeAvailabilityZonesOutput } from "../shapes/DescribeAvailabilityZonesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAvailabilityZones: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAvailabilityZones",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAvailabilityZonesInput
  },
  output: {
    shape: DescribeAvailabilityZonesOutput
  },
  errors: []
};

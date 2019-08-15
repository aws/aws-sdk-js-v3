import { DescribeScheduledInstanceAvailabilityInput } from "../shapes/DescribeScheduledInstanceAvailabilityInput";
import { DescribeScheduledInstanceAvailabilityOutput } from "../shapes/DescribeScheduledInstanceAvailabilityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScheduledInstanceAvailability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScheduledInstanceAvailability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScheduledInstanceAvailabilityInput
  },
  output: {
    shape: DescribeScheduledInstanceAvailabilityOutput
  },
  errors: []
};

import { DescribeScheduledInstanceAvailabilityInput } from "./DescribeScheduledInstanceAvailabilityInput";
import { DescribeScheduledInstanceAvailabilityOutput } from "./DescribeScheduledInstanceAvailabilityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

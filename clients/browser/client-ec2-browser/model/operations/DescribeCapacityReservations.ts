import { DescribeCapacityReservationsInput } from "../shapes/DescribeCapacityReservationsInput";
import { DescribeCapacityReservationsOutput } from "../shapes/DescribeCapacityReservationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCapacityReservations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCapacityReservations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCapacityReservationsInput
  },
  output: {
    shape: DescribeCapacityReservationsOutput
  },
  errors: []
};

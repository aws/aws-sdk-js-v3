import { DescribeHostReservationsInput } from "../shapes/DescribeHostReservationsInput";
import { DescribeHostReservationsOutput } from "../shapes/DescribeHostReservationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHostReservations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHostReservations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHostReservationsInput
  },
  output: {
    shape: DescribeHostReservationsOutput
  },
  errors: []
};

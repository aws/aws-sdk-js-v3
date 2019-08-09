import { DescribeHostReservationsInput } from "./DescribeHostReservationsInput";
import { DescribeHostReservationsOutput } from "./DescribeHostReservationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { DescribeHostReservationOfferingsInput } from "./DescribeHostReservationOfferingsInput";
import { DescribeHostReservationOfferingsOutput } from "./DescribeHostReservationOfferingsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeHostReservationOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHostReservationOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHostReservationOfferingsInput
  },
  output: {
    shape: DescribeHostReservationOfferingsOutput
  },
  errors: []
};

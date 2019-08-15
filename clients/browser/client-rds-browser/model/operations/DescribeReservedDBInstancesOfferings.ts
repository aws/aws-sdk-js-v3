import { DescribeReservedDBInstancesOfferingsInput } from "../shapes/DescribeReservedDBInstancesOfferingsInput";
import { DescribeReservedDBInstancesOfferingsOutput } from "../shapes/DescribeReservedDBInstancesOfferingsOutput";
import { ReservedDBInstancesOfferingNotFoundFault } from "../shapes/ReservedDBInstancesOfferingNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedDBInstancesOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedDBInstancesOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedDBInstancesOfferingsInput
  },
  output: {
    shape: DescribeReservedDBInstancesOfferingsOutput,
    resultWrapper: "DescribeReservedDBInstancesOfferingsResult"
  },
  errors: [
    {
      shape: ReservedDBInstancesOfferingNotFoundFault
    }
  ]
};

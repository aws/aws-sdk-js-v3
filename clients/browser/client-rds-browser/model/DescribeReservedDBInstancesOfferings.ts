import { DescribeReservedDBInstancesOfferingsInput } from "./DescribeReservedDBInstancesOfferingsInput";
import { DescribeReservedDBInstancesOfferingsOutput } from "./DescribeReservedDBInstancesOfferingsOutput";
import { ReservedDBInstancesOfferingNotFoundFault } from "./ReservedDBInstancesOfferingNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

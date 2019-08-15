import { MeterUsageInput } from "../shapes/MeterUsageInput";
import { MeterUsageOutput } from "../shapes/MeterUsageOutput";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidProductCodeException } from "../shapes/InvalidProductCodeException";
import { InvalidUsageDimensionException } from "../shapes/InvalidUsageDimensionException";
import { InvalidEndpointRegionException } from "../shapes/InvalidEndpointRegionException";
import { TimestampOutOfBoundsException } from "../shapes/TimestampOutOfBoundsException";
import { DuplicateRequestException } from "../shapes/DuplicateRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MeterUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MeterUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MeterUsageInput
  },
  output: {
    shape: MeterUsageOutput
  },
  errors: [
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidProductCodeException
    },
    {
      shape: InvalidUsageDimensionException
    },
    {
      shape: InvalidEndpointRegionException
    },
    {
      shape: TimestampOutOfBoundsException
    },
    {
      shape: DuplicateRequestException
    },
    {
      shape: ThrottlingException
    }
  ]
};

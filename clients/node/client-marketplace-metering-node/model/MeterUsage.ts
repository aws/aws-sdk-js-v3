import { MeterUsageInput } from "./MeterUsageInput";
import { MeterUsageOutput } from "./MeterUsageOutput";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidUsageDimensionException } from "./InvalidUsageDimensionException";
import { InvalidEndpointRegionException } from "./InvalidEndpointRegionException";
import { TimestampOutOfBoundsException } from "./TimestampOutOfBoundsException";
import { DuplicateRequestException } from "./DuplicateRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { BatchMeterUsageInput } from "./BatchMeterUsageInput";
import { BatchMeterUsageOutput } from "./BatchMeterUsageOutput";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidUsageDimensionException } from "./InvalidUsageDimensionException";
import { InvalidCustomerIdentifierException } from "./InvalidCustomerIdentifierException";
import { TimestampOutOfBoundsException } from "./TimestampOutOfBoundsException";
import { ThrottlingException } from "./ThrottlingException";
import { DisabledApiException } from "./DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchMeterUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchMeterUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchMeterUsageInput
  },
  output: {
    shape: BatchMeterUsageOutput
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
      shape: InvalidCustomerIdentifierException
    },
    {
      shape: TimestampOutOfBoundsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: DisabledApiException
    }
  ]
};

import { BatchMeterUsageInput } from "../shapes/BatchMeterUsageInput";
import { BatchMeterUsageOutput } from "../shapes/BatchMeterUsageOutput";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidProductCodeException } from "../shapes/InvalidProductCodeException";
import { InvalidUsageDimensionException } from "../shapes/InvalidUsageDimensionException";
import { InvalidCustomerIdentifierException } from "../shapes/InvalidCustomerIdentifierException";
import { TimestampOutOfBoundsException } from "../shapes/TimestampOutOfBoundsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { DisabledApiException } from "../shapes/DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

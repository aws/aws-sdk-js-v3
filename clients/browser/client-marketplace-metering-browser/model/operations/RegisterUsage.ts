import { RegisterUsageInput } from "../shapes/RegisterUsageInput";
import { RegisterUsageOutput } from "../shapes/RegisterUsageOutput";
import { InvalidProductCodeException } from "../shapes/InvalidProductCodeException";
import { InvalidRegionException } from "../shapes/InvalidRegionException";
import { InvalidPublicKeyVersionException } from "../shapes/InvalidPublicKeyVersionException";
import { PlatformNotSupportedException } from "../shapes/PlatformNotSupportedException";
import { CustomerNotEntitledException } from "../shapes/CustomerNotEntitledException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { DisabledApiException } from "../shapes/DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterUsageInput
  },
  output: {
    shape: RegisterUsageOutput
  },
  errors: [
    {
      shape: InvalidProductCodeException
    },
    {
      shape: InvalidRegionException
    },
    {
      shape: InvalidPublicKeyVersionException
    },
    {
      shape: PlatformNotSupportedException
    },
    {
      shape: CustomerNotEntitledException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: DisabledApiException
    }
  ]
};

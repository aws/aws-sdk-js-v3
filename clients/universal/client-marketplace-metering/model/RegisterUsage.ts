import { RegisterUsageInput } from "./RegisterUsageInput";
import { RegisterUsageOutput } from "./RegisterUsageOutput";
import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidRegionException } from "./InvalidRegionException";
import { InvalidPublicKeyVersionException } from "./InvalidPublicKeyVersionException";
import { PlatformNotSupportedException } from "./PlatformNotSupportedException";
import { CustomerNotEntitledException } from "./CustomerNotEntitledException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { DisabledApiException } from "./DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

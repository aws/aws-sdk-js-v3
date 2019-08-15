import { GetRegistrationCodeInput } from "../shapes/GetRegistrationCodeInput";
import { GetRegistrationCodeOutput } from "../shapes/GetRegistrationCodeOutput";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRegistrationCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRegistrationCode",
  http: {
    method: "GET",
    requestUri: "/registrationcode"
  },
  input: {
    shape: GetRegistrationCodeInput
  },
  output: {
    shape: GetRegistrationCodeOutput
  },
  errors: [
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    }
  ]
};

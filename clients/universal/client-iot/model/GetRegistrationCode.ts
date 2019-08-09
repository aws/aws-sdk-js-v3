import { GetRegistrationCodeInput } from "./GetRegistrationCodeInput";
import { GetRegistrationCodeOutput } from "./GetRegistrationCodeOutput";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

import { DeleteRegistrationCodeInput } from "../shapes/DeleteRegistrationCodeInput";
import { DeleteRegistrationCodeOutput } from "../shapes/DeleteRegistrationCodeOutput";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRegistrationCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRegistrationCode",
  http: {
    method: "DELETE",
    requestUri: "/registrationcode"
  },
  input: {
    shape: DeleteRegistrationCodeInput
  },
  output: {
    shape: DeleteRegistrationCodeOutput
  },
  errors: [
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};

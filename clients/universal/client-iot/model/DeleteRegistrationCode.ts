import { DeleteRegistrationCodeInput } from "./DeleteRegistrationCodeInput";
import { DeleteRegistrationCodeOutput } from "./DeleteRegistrationCodeOutput";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

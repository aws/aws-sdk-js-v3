import { DeleteApplicationsInput } from "../shapes/DeleteApplicationsInput";
import { DeleteApplicationsOutput } from "../shapes/DeleteApplicationsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationsInput
  },
  output: {
    shape: DeleteApplicationsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};

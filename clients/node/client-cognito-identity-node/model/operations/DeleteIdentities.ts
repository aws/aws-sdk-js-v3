import { DeleteIdentitiesInput } from "../shapes/DeleteIdentitiesInput";
import { DeleteIdentitiesOutput } from "../shapes/DeleteIdentitiesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIdentities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIdentitiesInput
  },
  output: {
    shape: DeleteIdentitiesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};

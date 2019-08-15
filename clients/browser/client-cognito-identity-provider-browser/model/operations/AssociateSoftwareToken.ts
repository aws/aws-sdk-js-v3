import { AssociateSoftwareTokenInput } from "../shapes/AssociateSoftwareTokenInput";
import { AssociateSoftwareTokenOutput } from "../shapes/AssociateSoftwareTokenOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "../shapes/SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateSoftwareToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateSoftwareToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateSoftwareTokenInput
  },
  output: {
    shape: AssociateSoftwareTokenOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: SoftwareTokenMFANotFoundException
    }
  ]
};

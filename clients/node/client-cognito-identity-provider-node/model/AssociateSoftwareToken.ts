import { AssociateSoftwareTokenInput } from "./AssociateSoftwareTokenInput";
import { AssociateSoftwareTokenOutput } from "./AssociateSoftwareTokenOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

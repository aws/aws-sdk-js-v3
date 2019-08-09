import { CreateTrustInput } from "./CreateTrustInput";
import { CreateTrustOutput } from "./CreateTrustOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTrust: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrust",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrustInput
  },
  output: {
    shape: CreateTrustOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};

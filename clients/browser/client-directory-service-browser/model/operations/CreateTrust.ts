import { CreateTrustInput } from "../shapes/CreateTrustInput";
import { CreateTrustOutput } from "../shapes/CreateTrustOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

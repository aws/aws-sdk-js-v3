import { CreateConditionalForwarderInput } from "./CreateConditionalForwarderInput";
import { CreateConditionalForwarderOutput } from "./CreateConditionalForwarderOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConditionalForwarder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConditionalForwarder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConditionalForwarderInput
  },
  output: {
    shape: CreateConditionalForwarderOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};

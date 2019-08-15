import { CreateConditionalForwarderInput } from "../shapes/CreateConditionalForwarderInput";
import { CreateConditionalForwarderOutput } from "../shapes/CreateConditionalForwarderOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

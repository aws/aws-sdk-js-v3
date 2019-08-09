import { UpdateConditionalForwarderInput } from "./UpdateConditionalForwarderInput";
import { UpdateConditionalForwarderOutput } from "./UpdateConditionalForwarderOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateConditionalForwarder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConditionalForwarder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConditionalForwarderInput
  },
  output: {
    shape: UpdateConditionalForwarderOutput
  },
  errors: [
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

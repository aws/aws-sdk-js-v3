import { DeleteConditionalForwarderInput } from "../shapes/DeleteConditionalForwarderInput";
import { DeleteConditionalForwarderOutput } from "../shapes/DeleteConditionalForwarderOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConditionalForwarder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConditionalForwarder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConditionalForwarderInput
  },
  output: {
    shape: DeleteConditionalForwarderOutput
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

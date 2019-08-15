import { UpdateConditionalForwarderInput } from "../shapes/UpdateConditionalForwarderInput";
import { UpdateConditionalForwarderOutput } from "../shapes/UpdateConditionalForwarderOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

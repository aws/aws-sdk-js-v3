import { GetDirectoryLimitsInput } from "../shapes/GetDirectoryLimitsInput";
import { GetDirectoryLimitsOutput } from "../shapes/GetDirectoryLimitsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDirectoryLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDirectoryLimits",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDirectoryLimitsInput
  },
  output: {
    shape: GetDirectoryLimitsOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};

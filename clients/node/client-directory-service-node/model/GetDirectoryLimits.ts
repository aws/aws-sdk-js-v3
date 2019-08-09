import { GetDirectoryLimitsInput } from "./GetDirectoryLimitsInput";
import { GetDirectoryLimitsOutput } from "./GetDirectoryLimitsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

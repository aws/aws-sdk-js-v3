import { GetSnapshotLimitsInput } from "./GetSnapshotLimitsInput";
import { GetSnapshotLimitsOutput } from "./GetSnapshotLimitsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSnapshotLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSnapshotLimits",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSnapshotLimitsInput
  },
  output: {
    shape: GetSnapshotLimitsOutput
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

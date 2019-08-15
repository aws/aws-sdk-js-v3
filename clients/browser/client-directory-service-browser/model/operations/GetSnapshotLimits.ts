import { GetSnapshotLimitsInput } from "../shapes/GetSnapshotLimitsInput";
import { GetSnapshotLimitsOutput } from "../shapes/GetSnapshotLimitsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

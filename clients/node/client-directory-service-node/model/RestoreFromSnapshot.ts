import { RestoreFromSnapshotInput } from "./RestoreFromSnapshotInput";
import { RestoreFromSnapshotOutput } from "./RestoreFromSnapshotOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreFromSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreFromSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreFromSnapshotInput
  },
  output: {
    shape: RestoreFromSnapshotOutput
  },
  errors: [
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
    }
  ]
};

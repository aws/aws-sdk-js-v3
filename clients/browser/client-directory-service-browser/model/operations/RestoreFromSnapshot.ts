import { RestoreFromSnapshotInput } from "../shapes/RestoreFromSnapshotInput";
import { RestoreFromSnapshotOutput } from "../shapes/RestoreFromSnapshotOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

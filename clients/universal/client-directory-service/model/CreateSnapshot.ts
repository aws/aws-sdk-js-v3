import { CreateSnapshotInput } from "./CreateSnapshotInput";
import { CreateSnapshotOutput } from "./CreateSnapshotOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { SnapshotLimitExceededException } from "./SnapshotLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotInput
  },
  output: {
    shape: CreateSnapshotOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: SnapshotLimitExceededException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};

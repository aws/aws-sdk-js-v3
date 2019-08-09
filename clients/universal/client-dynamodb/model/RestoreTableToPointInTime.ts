import { RestoreTableToPointInTimeInput } from "./RestoreTableToPointInTimeInput";
import { RestoreTableToPointInTimeOutput } from "./RestoreTableToPointInTimeOutput";
import { TableAlreadyExistsException } from "./TableAlreadyExistsException";
import { TableNotFoundException } from "./TableNotFoundException";
import { TableInUseException } from "./TableInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidRestoreTimeException } from "./InvalidRestoreTimeException";
import { PointInTimeRecoveryUnavailableException } from "./PointInTimeRecoveryUnavailableException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreTableToPointInTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreTableToPointInTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreTableToPointInTimeInput
  },
  output: {
    shape: RestoreTableToPointInTimeOutput
  },
  errors: [
    {
      shape: TableAlreadyExistsException
    },
    {
      shape: TableNotFoundException
    },
    {
      shape: TableInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidRestoreTimeException
    },
    {
      shape: PointInTimeRecoveryUnavailableException
    },
    {
      shape: InternalServerError
    }
  ]
};

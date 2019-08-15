import { RestoreTableToPointInTimeInput } from "../shapes/RestoreTableToPointInTimeInput";
import { RestoreTableToPointInTimeOutput } from "../shapes/RestoreTableToPointInTimeOutput";
import { TableAlreadyExistsException } from "../shapes/TableAlreadyExistsException";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { TableInUseException } from "../shapes/TableInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidRestoreTimeException } from "../shapes/InvalidRestoreTimeException";
import { PointInTimeRecoveryUnavailableException } from "../shapes/PointInTimeRecoveryUnavailableException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

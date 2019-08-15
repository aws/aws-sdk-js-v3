import { UpdateContinuousBackupsInput } from "../shapes/UpdateContinuousBackupsInput";
import { UpdateContinuousBackupsOutput } from "../shapes/UpdateContinuousBackupsOutput";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { ContinuousBackupsUnavailableException } from "../shapes/ContinuousBackupsUnavailableException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateContinuousBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContinuousBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateContinuousBackupsInput
  },
  output: {
    shape: UpdateContinuousBackupsOutput
  },
  errors: [
    {
      shape: TableNotFoundException
    },
    {
      shape: ContinuousBackupsUnavailableException
    },
    {
      shape: InternalServerError
    }
  ]
};

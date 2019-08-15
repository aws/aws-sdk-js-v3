import { DescribeBackupsInput } from "../shapes/DescribeBackupsInput";
import { DescribeBackupsOutput } from "../shapes/DescribeBackupsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { BackupNotFound } from "../shapes/BackupNotFound";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBackupsInput
  },
  output: {
    shape: DescribeBackupsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: BackupNotFound
    },
    {
      shape: InternalServerError
    }
  ]
};

import { DescribeBackupsInput } from "./DescribeBackupsInput";
import { DescribeBackupsOutput } from "./DescribeBackupsOutput";
import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { BackupNotFound } from "./BackupNotFound";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

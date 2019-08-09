import { DescribeBackupInput } from "./DescribeBackupInput";
import { DescribeBackupOutput } from "./DescribeBackupOutput";
import { BackupNotFoundException } from "./BackupNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBackupInput
  },
  output: {
    shape: DescribeBackupOutput
  },
  errors: [
    {
      shape: BackupNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};

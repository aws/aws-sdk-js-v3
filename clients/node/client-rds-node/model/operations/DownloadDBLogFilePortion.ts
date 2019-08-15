import { DownloadDBLogFilePortionInput } from "../shapes/DownloadDBLogFilePortionInput";
import { DownloadDBLogFilePortionOutput } from "../shapes/DownloadDBLogFilePortionOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBLogFileNotFoundFault } from "../shapes/DBLogFileNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DownloadDBLogFilePortion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DownloadDBLogFilePortion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DownloadDBLogFilePortionInput
  },
  output: {
    shape: DownloadDBLogFilePortionOutput,
    resultWrapper: "DownloadDBLogFilePortionResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBLogFileNotFoundFault
    }
  ]
};

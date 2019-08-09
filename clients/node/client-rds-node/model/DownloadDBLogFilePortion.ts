import { DownloadDBLogFilePortionInput } from "./DownloadDBLogFilePortionInput";
import { DownloadDBLogFilePortionOutput } from "./DownloadDBLogFilePortionOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBLogFileNotFoundFault } from "./DBLogFileNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

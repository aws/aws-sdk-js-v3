import { ListBackupsInput } from "./ListBackupsInput";
import { ListBackupsOutput } from "./ListBackupsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBackupsInput
  },
  output: {
    shape: ListBackupsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};

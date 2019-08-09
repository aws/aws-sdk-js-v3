import { CancelCommandInput } from "./CancelCommandInput";
import { CancelCommandOutput } from "./CancelCommandOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { DuplicateInstanceId } from "./DuplicateInstanceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelCommand: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelCommand",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelCommandInput
  },
  output: {
    shape: CancelCommandOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidCommandId
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: DuplicateInstanceId
    }
  ]
};

import { CancelCommandInput } from "../shapes/CancelCommandInput";
import { CancelCommandOutput } from "../shapes/CancelCommandOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidCommandId } from "../shapes/InvalidCommandId";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { DuplicateInstanceId } from "../shapes/DuplicateInstanceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

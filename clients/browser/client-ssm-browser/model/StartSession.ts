import { StartSessionInput } from "./StartSessionInput";
import { StartSessionOutput } from "./StartSessionOutput";
import { InvalidDocument } from "./InvalidDocument";
import { TargetNotConnected } from "./TargetNotConnected";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartSessionInput
  },
  output: {
    shape: StartSessionOutput
  },
  errors: [
    {
      shape: InvalidDocument
    },
    {
      shape: TargetNotConnected
    },
    {
      shape: InternalServerError
    }
  ]
};

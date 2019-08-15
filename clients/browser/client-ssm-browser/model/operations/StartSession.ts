import { StartSessionInput } from "../shapes/StartSessionInput";
import { StartSessionOutput } from "../shapes/StartSessionOutput";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { TargetNotConnected } from "../shapes/TargetNotConnected";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

import { GetTelemetryMetadataInput } from "./GetTelemetryMetadataInput";
import { GetTelemetryMetadataOutput } from "./GetTelemetryMetadataOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTelemetryMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTelemetryMetadata",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTelemetryMetadataInput
  },
  output: {
    shape: GetTelemetryMetadataOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    }
  ]
};

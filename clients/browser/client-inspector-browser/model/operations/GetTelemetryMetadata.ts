import { GetTelemetryMetadataInput } from "../shapes/GetTelemetryMetadataInput";
import { GetTelemetryMetadataOutput } from "../shapes/GetTelemetryMetadataOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

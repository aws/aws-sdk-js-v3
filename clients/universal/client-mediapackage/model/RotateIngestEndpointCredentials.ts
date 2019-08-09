import { RotateIngestEndpointCredentialsInput } from "./RotateIngestEndpointCredentialsInput";
import { RotateIngestEndpointCredentialsOutput } from "./RotateIngestEndpointCredentialsOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RotateIngestEndpointCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RotateIngestEndpointCredentials",
  http: {
    method: "PUT",
    requestUri:
      "/channels/{id}/ingest_endpoints/{ingest_endpoint_id}/credentials"
  },
  input: {
    shape: RotateIngestEndpointCredentialsInput
  },
  output: {
    shape: RotateIngestEndpointCredentialsOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

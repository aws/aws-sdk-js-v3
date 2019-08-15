import { RotateIngestEndpointCredentialsInput } from "../shapes/RotateIngestEndpointCredentialsInput";
import { RotateIngestEndpointCredentialsOutput } from "../shapes/RotateIngestEndpointCredentialsOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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

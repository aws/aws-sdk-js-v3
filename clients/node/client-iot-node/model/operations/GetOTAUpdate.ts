import { GetOTAUpdateInput } from "../shapes/GetOTAUpdateInput";
import { GetOTAUpdateOutput } from "../shapes/GetOTAUpdateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOTAUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOTAUpdate",
  http: {
    method: "GET",
    requestUri: "/otaUpdates/{otaUpdateId}"
  },
  input: {
    shape: GetOTAUpdateInput
  },
  output: {
    shape: GetOTAUpdateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

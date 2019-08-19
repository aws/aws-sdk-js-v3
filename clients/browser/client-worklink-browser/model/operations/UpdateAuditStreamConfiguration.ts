import { UpdateAuditStreamConfigurationInput } from "../shapes/UpdateAuditStreamConfigurationInput";
import { UpdateAuditStreamConfigurationOutput } from "../shapes/UpdateAuditStreamConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAuditStreamConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAuditStreamConfiguration",
  http: {
    method: "POST",
    requestUri: "/updateAuditStreamConfiguration"
  },
  input: {
    shape: UpdateAuditStreamConfigurationInput
  },
  output: {
    shape: UpdateAuditStreamConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

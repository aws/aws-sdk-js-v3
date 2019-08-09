import { UpdateAuditStreamConfigurationInput } from "./UpdateAuditStreamConfigurationInput";
import { UpdateAuditStreamConfigurationOutput } from "./UpdateAuditStreamConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

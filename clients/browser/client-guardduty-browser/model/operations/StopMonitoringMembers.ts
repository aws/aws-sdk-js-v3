import { StopMonitoringMembersInput } from "../shapes/StopMonitoringMembersInput";
import { StopMonitoringMembersOutput } from "../shapes/StopMonitoringMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopMonitoringMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopMonitoringMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/stop"
  },
  input: {
    shape: StopMonitoringMembersInput
  },
  output: {
    shape: StopMonitoringMembersOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};

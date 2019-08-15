import { StartMonitoringMembersInput } from "../shapes/StartMonitoringMembersInput";
import { StartMonitoringMembersOutput } from "../shapes/StartMonitoringMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartMonitoringMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartMonitoringMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/start"
  },
  input: {
    shape: StartMonitoringMembersInput
  },
  output: {
    shape: StartMonitoringMembersOutput
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

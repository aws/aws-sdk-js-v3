import { StartMonitoringMembersInput } from "./StartMonitoringMembersInput";
import { StartMonitoringMembersOutput } from "./StartMonitoringMembersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

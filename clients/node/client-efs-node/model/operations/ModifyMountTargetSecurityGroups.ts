import { ModifyMountTargetSecurityGroupsInput } from "../shapes/ModifyMountTargetSecurityGroupsInput";
import { ModifyMountTargetSecurityGroupsOutput } from "../shapes/ModifyMountTargetSecurityGroupsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { MountTargetNotFound } from "../shapes/MountTargetNotFound";
import { IncorrectMountTargetState } from "../shapes/IncorrectMountTargetState";
import { SecurityGroupLimitExceeded } from "../shapes/SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "../shapes/SecurityGroupNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyMountTargetSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyMountTargetSecurityGroups",
  http: {
    method: "PUT",
    requestUri: "/2015-02-01/mount-targets/{MountTargetId}/security-groups"
  },
  input: {
    shape: ModifyMountTargetSecurityGroupsInput
  },
  output: {
    shape: ModifyMountTargetSecurityGroupsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: MountTargetNotFound
    },
    {
      shape: IncorrectMountTargetState
    },
    {
      shape: SecurityGroupLimitExceeded
    },
    {
      shape: SecurityGroupNotFound
    }
  ]
};

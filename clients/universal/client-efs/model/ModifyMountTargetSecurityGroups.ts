import { ModifyMountTargetSecurityGroupsInput } from "./ModifyMountTargetSecurityGroupsInput";
import { ModifyMountTargetSecurityGroupsOutput } from "./ModifyMountTargetSecurityGroupsOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { IncorrectMountTargetState } from "./IncorrectMountTargetState";
import { SecurityGroupLimitExceeded } from "./SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "./SecurityGroupNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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

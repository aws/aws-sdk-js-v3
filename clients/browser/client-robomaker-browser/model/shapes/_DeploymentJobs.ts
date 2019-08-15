import { List as _List_ } from "@aws-sdk/types";
import { _DeploymentJob } from "./_DeploymentJob";

export const _DeploymentJobs: _List_ = {
  type: "list",
  member: {
    shape: _DeploymentJob
  }
};
